import 'package:flutter/material.dart';
import 'package:validaquero/components/SnackBars.dart';
import 'package:validaquero/components/cards/card_arquivo.dart';
import 'package:validaquero/models/arquivo_model.dart';
import 'package:validaquero/services/arquivo.dart';
import 'package:validaquero/themes/app_colors.dart';

class Arquivos extends StatefulWidget {
  const Arquivos({super.key});

  @override
  State<Arquivos> createState() => _ArquivosState();
}

class _ArquivosState extends State<Arquivos> {
  final ArquivoService arquivoService = ArquivoService();
  List<Arquivo> arquivosList = [];
  List<Arquivo> filteredList = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchArquivos();
  }

  void fetchArquivos() async {
    final response = await arquivoService.getAll();

    if (response["status"] == "success") {
      List<dynamic> arquivoDataList = response["arquivos"];

      List<Arquivo> arquivo =
          arquivoDataList.map((arq) => Arquivo.fromJson(arq)).toList();

      setState(() {
        arquivosList = arquivo;
        filteredList = arquivosList;
        isLoading = false;
      });
    } else {
      showSnackBar(context, response['message']);
    }
  }

  void filterArquivos(String query) {
    filteredList = arquivosList;
    setState(() {
      filteredList = filteredList
          .where((arquivo) =>
              arquivo.titulo.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(14.0),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        decoration: BoxDecoration(
          color: ThemeColors.fundoComponenteColor,
          borderRadius: BorderRadius.circular(10),
        ),
        child: CustomScrollView(slivers: [
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.only(top: 14, bottom: 24, left: 0, right: 0),
              child: TextField(
                onChanged: filterArquivos,
                decoration: const InputDecoration(
                  icon: Icon(Icons.search),
                  hintText: 'Buscar arquivos por nome...',
                ),
              ),
            ),
          ),
          isLoading
              ? SliverToBoxAdapter(
                  child: SizedBox(
                    height: MediaQuery.of(context).size.height * 0.7,
                    child: const Center(
                      child: CircularProgressIndicator(
                        color: ThemeColors.primaryColor,
                      ),
                    ),
                  ),
                )
              : SliverList(
                  delegate: SliverChildBuilderDelegate(
                    (context, index) {
                      return CardArquivo(
                        arquivo: filteredList[index],
                      );
                    },
                    childCount: filteredList.length,
                  ),
                )
        ]),
      ),
    );
  }
}
