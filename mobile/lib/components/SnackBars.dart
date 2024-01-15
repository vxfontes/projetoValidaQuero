import 'package:flutter/material.dart';
import 'package:validaquero/themes/app_colors.dart';

void showSnackBar(BuildContext context, String message) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      backgroundColor: ThemeColors.primaryColor,
      content: Text(message),
      duration: const Duration(seconds: 7),
    ),
  );
}
