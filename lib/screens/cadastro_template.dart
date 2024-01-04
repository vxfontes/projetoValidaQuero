import 'package:flutter/material.dart';
import 'package:validaquero/themes/app_colors.dart';

class CadastroTemplate extends StatefulWidget {
  const CadastroTemplate({super.key});

  @override
  State<CadastroTemplate> createState() => _CadastroTemplateState();
}

class _CadastroTemplateState extends State<CadastroTemplate> {
  int _activeStep = 0;
  List<Step> stepList() => [
        Step(
          title: const Text('Step 1'),
          content: Center(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
              child: TextFormField(
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  hintText: 'Matrícula',
                ),
              ),
            ),
          ),
        ),
        const Step(
          title: Text('Step 2'),
          content: Center(
            child: Text('Step 2 content'),
          ),
        ),
        const Step(
          title: Text('Step 3'),
          content: Center(
            child: Text('Step 3 content'),
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
      body: Stepper(
        type: StepperType.horizontal,
        steps: stepList(),
        currentStep: _activeStep,
        onStepContinue: () {
          if (_activeStep < stepList().length - 1) {
            _activeStep++;
          }
          setState(() {});
        },
        onStepCancel: () {
          if (_activeStep > 0) {
            _activeStep--;
          }
          setState(() {});
        },
      ),
    );
  }
}
