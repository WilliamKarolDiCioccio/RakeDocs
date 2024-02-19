---
title: Téléchargement et compilation
description: Guide de téléchargement et d'installation de Rake Engine.
---

## Prérequis logiciels

- Visual Studio Code
- Visual Studio 2022
- Git Cmd Line

Vous pouvez installer tous ceux-ci en appuyant sur Démarrer et en recherchant `DevHome`. Une fois l'hub ouvert dans le menu latéral, cliquez sur `Machine Configuration -> Install Application` et recherchez les programmes requis.

## Obtenir le code

Vous pouvez le faire soit en clonant le dépôt via la ligne de commande, soit en vous rendant sur la [Page de lancement de Rake](https://landing-rake-engine.netlify.app) et en cliquant sur le bouton `Cloner le code` qui vous redirigera vers la page GitHub.

### Cloner le dépôt

Ouvrez la ligne de commande et tapez:

```bash
git clone --recursive https://github.com/WilliamKarolDiCioccio/Rake
```

Avec l'option `--recursive` ou `-r`, le dépôt sera cloné avec ses sous-modules, si cela ne se produit pas, vous pouvez toujours le faire manuellement avec les commandes suivantes:

```bash
cd Rake
```
```bash
git submodule update --init
```

## Installer les outils

Toutes les étapes ci-dessous ont été automatisées à l'aide d'un script Python que vous pouvez exécuter en ouvrant le dossier de Rake dans VSCode (gardez-le ouvert, vous en aurez besoin) et en appuyant sur `Ctrl + Maj + B` pour exécuter la tâche `Installer les outils`. Cependant, si vous rencontrez des problèmes, vous pouvez suivre ces étapes.

1. Python est disponible dans le Microsoft Store ou sur ce [site Web](https://www.python.org/downloads/), exécutez l'assistant et suivez les instructions.

2. Premake5 peut être téléchargé depuis ce [site Web](https://premake.github.io/download). Choisissez l'option Windows, décompressez le fichier et placez l'exécutable Premake où vous le souhaitez, cependant, il doit être appelable depuis la console.

## Prérequis Python

Avant de commencer, vous devrez peut-être installer certains modules Python. Pour ce faire, vous devez avoir Python et 'PIP' installés, après quoi, exécutez les commandes suivantes:

```bash
cd scripts
```
```bash
pip install -r requirements.txt
```

## Télécharger les bibliothèques

Toutes les étapes ci-dessous ont été automatisées à l'aide d'un script Python que vous pouvez exécuter en ouvrant le dossier de Rake dans VSCode et en appuyant sur `Ctrl + Maj + B` pour exécuter la tâche `Télécharger les bibliothèques`. Cependant, si vous rencontrez des problèmes, vous pouvez suivre ces étapes.

1. La bibliothèque Vulkan peut être téléchargée depuis ce [site Web](https://sdk.lunarg.com/sdk/download/1.3.261.1/windows/VulkanSDK-1.3.261.1-Installer.exe) (Version actuellement utilisée 1.3.261.1). Lorsque Vulkan est installé, une variable d'environnement avec son chemin sera automatiquement créée.

2. La bibliothèque Microsoft GameDK peut être téléchargée depuis ce [site Web](https://github.com/microsoft/GDK/archive/refs/tags/June_2023_Update_3.zip). Après l'installation de GameDK, vous devrez exécuter les scripts de configuration de l'environnement trouvés dans `C:\VotreCheminInstallé\Microsoft GDK\CommandPrompts`.

3. La bibliothèque KTX Software peut être téléchargée depuis ce [site Web](https://github.com/KhronosGroup/KTX-Software/releases/download/v4.2.1/KTX-Software-4.2.1-Windows-arm64.exe). Vous devrez créer manuellement une variable d'environnement nommée KTX_SOFTWARE contenant le chemin de son installation.

4. La bibliothèque Libsodium peut être téléchargée depuis ce [site Web](https://github.com/jedisct1/libsodium/releases/download/1.0.19-RELEASE/libsodium-1.0.19-msvc.zip). Vous devrez créer manuellement une variable d'environnement nommée LIBSODIUM contenant le chemin de son installation.

N'oubliez pas que vous pouvez toujours ajuster le fichier `dependencies.lua` si vous avez des besoins spéciaux ou si vous souhaitez simplement expérimenter avec différentes versions des bibliothèques.

## Générer les fichiers de solution

Rake utilise Premake5 pour générer des projets et des configurations de compilation, même dans ce cas, vous pouvez exécuter les scripts dans VScode ou à partir de `GenerateProjects.bat`.

## Ligne d'arrivée

L'installation de Rake est terminée ! Vous êtes prêt à compiler et exécuter le programme ! Double-cliquez sur le fichier `.sln` dans le dossier racine de Rake et ouvrez-le avec Visual Studio 2022 et vous avez terminé. Bon développement!