import 'package:flutter/material.dart';
import 'package:validaquero/components/texts/texts.dart';
import 'package:validaquero/data/formato.dart';
import 'package:validaquero/data/tipos.dart';
import 'package:validaquero/themes/app_colors.dart';
import 'package:validaquero/utils/valueValidator.dart';

class CadastroTemplate extends StatefulWidget {
  const CadastroTemplate({super.key});

  @override
  State<CadastroTemplate> createState() => _CadastroTemplateState();
}

class _CadastroTemplateState extends State<CadastroTemplate> {
  int _activeStep = 0;
  bool isCompleted = false;

  final _formKey = GlobalKey<FormState>();

  final tituloController = TextEditingController();
  var formatoController = '';
  final descricaoController = TextEditingController();

  final nomeController = TextEditingController();
  var nuloController;
  var tipoController = '';

  List<Step> stepList() => [
        Step(
          title: const Text('Informações principais do template'),
          state: _activeStep > 0 ? StepState.complete : StepState.indexed,
          isActive: _activeStep >= 0,
          content: Center(
            child: SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: TextFormField(
                      controller: tituloController,
                      validator: (String? value) {
                        if (valueValidator(value)) {
                          return 'Insira o título do template';
                        }
                        return null;
                      },
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'Título do template',
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: DropdownButtonFormField(
                      isExpanded: true,
                      hint: const Text('Formato do template'),
                      icon: const Icon(
                        Icons.arrow_drop_down,
                        color: Colors.black45,
                      ),
                      items: formato
                          .map(
                            (form) => DropdownMenuItem(
                              value: form,
                              child: Text(form),
                            ),
                          )
                          .toList(),
                      decoration: InputDecoration(
                        border: const OutlineInputBorder(),
                        hintText: 'Formato do template',
                        errorText: formatoController == ''
                            ? 'Insira o formato do template'
                            : null,
                      ),
                      onChanged: (String? value) {
                        setState(() {
                          formatoController = value ?? '';
                        });
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: TextFormField(
                      validator: (value) {
                        if (valueValidator(value)) {
                          return 'Insira a descrição do template';
                        }
                        return null;
                      },
                      controller: descricaoController,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'Descrição do template',
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        Step(
          title: const Text('Campos do template'),
          state: _activeStep > 1 ? StepState.complete : StepState.indexed,
          isActive: _activeStep >= 1,
          content: Center(
            child: SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: TextFormField(
                      controller: nomeController,
                      validator: (String? value) {
                        if (valueValidator(value)) {
                          return 'Insira o nome do campo';
                        }
                        return null;
                      },
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'Nome do campo',
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: DropdownButtonFormField(
                      isExpanded: true,
                      hint: const Text('Tipo do campo'),
                      icon: const Icon(
                        Icons.arrow_drop_down,
                        color: Colors.black45,
                      ),
                      items: tipos
                          .map(
                            (form) => DropdownMenuItem(
                              value: form['pandas'],
                              child: Text(form['human']!),
                            ),
                          )
                          .toList(),
                      decoration: InputDecoration(
                        border: const OutlineInputBorder(),
                        errorText: tipoController == ''
                            ? 'Insira o tipo do campo'
                            : null,
                      ),
                      onChanged: (String? value) {
                        setState(() {
                          tipoController = value ?? '';
                        });
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: DropdownButtonFormField(
                      isExpanded: true,
                      hint: const Text('Nulidade do campo'),
                      icon: const Icon(
                        Icons.arrow_drop_down,
                        color: Colors.black45,
                      ),
                      items: const [
                        DropdownMenuItem(
                          value: true,
                          child: Text('Pode conter nulo'),
                        ),
                        DropdownMenuItem(
                          value: false,
                          child: Text('Não pode conter nulo'),
                        ),
                      ],
                      decoration: InputDecoration(
                        border: const OutlineInputBorder(),
                        errorText: nuloController == null
                            ? 'Insira o tipo do campo'
                            : null,
                      ),
                      onChanged: (bool? value) {
                        setState(() {
                          nuloController = value;
                        });
                      },
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        Step(
          title: const Text('Confirmação das informações'),
          state: _activeStep > 2 ? StepState.complete : StepState.indexed,
          isActive: _activeStep >= 2,
          content: Container(
            padding: const EdgeInsets.symmetric(vertical: 20.0, horizontal: 30),
            decoration: BoxDecoration(
              color: ThemeColors.fundoComponenteColor,
              border: Border.all(
                color: Colors.black26,
                width: 1.5,
              ),
              borderRadius: BorderRadius.circular(8.0),
            ),
            child: Column(
              children: [
                TextTitleBig(title: 'Título: ${tituloController.text}'),
                TextTitleBig(title: 'Formato: $formatoController'),
                TextTitleBig(title: 'Descrição: ${descricaoController.text}'),
                const SizedBox(height: 16.0),
                // Adiciona um espaço entre as informações
                TextTitleBig(title: 'Nome: ${nomeController.text}'),
                TextTitleBig(title: 'Nulo: $nuloController'),
                TextTitleBig(title: 'Tipo: $tipoController'),
              ],
            ),
          ),
        ),
      ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastrar template'),
        backgroundColor: ThemeColors.fundoComponenteColor,
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: Theme(
        data: Theme.of(context).copyWith(
          colorScheme:
              const ColorScheme.light(primary: ThemeColors.primaryColor),
        ),
        child: Form(
          key: _formKey,
          child: Stepper(
            type: StepperType.vertical,
            steps: stepList(),
            currentStep: _activeStep,
            onStepTapped: (step) {
              _formKey.currentState!.validate(); //this will trigger validation
              setState(() {
                _activeStep = step;
              });
            },
            onStepContinue: () {
              final isLastStep = _activeStep == stepList().length - 1;
              _formKey.currentState!.validate();
              bool isDetailValid = isDetailComplete();

              if (isDetailValid) {
                if (isLastStep) {
                  setState(() {
                    isCompleted = true;
                  });
                } else {
                  setState(() {
                    _activeStep += 1;
                  });
                }
              }
            },
            onStepCancel: () {
              if (_activeStep > 0) {
                _activeStep--;
              }
              setState(() {});
            },
          ),
        ),
      ),
    );
  }

  bool isDetailComplete() {
    if (_activeStep == 0) {
      //check sender fields
      if (tituloController.text.isEmpty ||
          descricaoController.text.isEmpty ||
          formatoController == '') {
        return false;
      } else {
        return true;
      }
    } else if (_activeStep == 1) {
      //check receiver fields
      if (nomeController.text.isEmpty ||
          tipoController == '' ||
          nuloController == null) {
        return false;
      } else {
        return true;
      }
    } else if (_activeStep == 2) {
      final template = {
        'titulo': tituloController.text,
        'descricao': descricaoController.text,
        'quantidadeCampos': 1,
        'status': 'Pendente',
        'campos': {
          'nome': nomeController.text,
          'tipo': tipoController,
          'nulo': nuloController,
        },
        'formato': getValue(formatoController),
        'usuario': ''
      };
      print(template);
      Navigator.pop(context);
    }
    return false;
  }
}
