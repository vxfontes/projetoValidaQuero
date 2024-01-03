import 'package:flutter/material.dart';
import 'package:validaquero/themes/app_colors.dart';

class CadastroTemplate extends StatefulWidget {
  const CadastroTemplate({super.key});

  @override
  State<CadastroTemplate> createState() => _CadastroTemplateState();
}

class _CadastroTemplateState extends State<CadastroTemplate> {
  List<Step> stepList() => [
        Step(
          title: const Text('Step 1'),
          content: const Text('Step 1 content'),
          isActive: true,
        ),
        Step(
          title: const Text('Step 2'),
          content: const Text('Step 2 content'),
          isActive: true,
        ),
        Step(
          title: const Text('Step 3'),
          content: const Text('Step 3 content'),
          isActive: true,
        ),
      ];

  @override
  Widget build(BuildContext context) {
    int _activeStep = 0;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastrar template'),
        backgroundColor: ThemeColors.fundoComponenteColor,
      ),
      backgroundColor: ThemeColors.fundoPrincipalColor,
      body: Form(
        child: Column(
          children: <Widget>[
            Stepper(
              steps: stepList(),
              currentStep: _activeStep,
              onStepContinue: () {
                if (_activeStep < stepList().length - 1) {
                  _activeStep++;
                }
                setState(() {});
              },
            )
          ],
        ),
      ),
    );
  }
}
