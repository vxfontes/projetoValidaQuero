import 'package:flutter/material.dart';
import 'package:validaquero/components/cards/card_template.dart';
import 'package:validaquero/models/template_model.dart';
import 'package:validaquero/services/template.dart';
import 'package:validaquero/themes/app_colors.dart';

class Templates extends StatefulWidget {
  const Templates({super.key});

  @override
  State<Templates> createState() => _TemplatesState();
}

class _TemplatesState extends State<Templates> {
  final TemplateService templateService = TemplateService();
  List<Template> templateList = [];
  List<Template> filteredList = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchTemplates();
  }

  void fetchTemplates() async {
    final response = await templateService.getAll();

    if (response["status"] == "success") {
      List<dynamic> templateDataList = response["templates"];

      List<Template> templateList = templateDataList
          .map((templateData) => Template.fromJson(templateData))
          .toList();

      setState(() {
        templateList = templateList;
        filteredList = templateList;
        isLoading = false;
      });
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: ThemeColors.primaryColor,
          content: Text(response["message"]),
          duration: const Duration(seconds: 15),
        ),
      );
    }
  }

  void filterTemplates(String query) {
    setState(() {
      filteredList = filteredList
          .where((template) =>
              template.titulo.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10.0, horizontal: 16.0),
      child: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 10.0),
              child: TextField(
                onChanged: filterTemplates,
                decoration: const InputDecoration(
                  icon: Icon(Icons.search),
                  hintText: 'Buscar templates por nome...',
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
                      return CardTemplate(template: filteredList[index]);
                    },
                    childCount: filteredList.length,
                  ),
                ),
        ],
      ),
    );
  }
}
