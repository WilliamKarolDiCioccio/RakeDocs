---
title: Downloading And Compiling
description: Rake Engine download and installation Guide.
---

## Software Prerequisites

- Visual Studio Code
- Visual Studio 2022
- Git Cmd Line

You can install all those by pressing start and searching for `DevHome`. Once the hub is opened on the side menu click `Machine Condiguration -> Install Application` and search for the required programs.

## Get the code

You can do that either by cloning the repository via the command line, or by heading to the [Rake Landing Page](https://landing-rake-engine.netlify.app) and hitting the `Clone Code` button that will redirect you to the GitHub page.

### Clone the repository

Open the command line and type:

```bash
git clone --recursive https://github.com/WilliamKarolDiCioccio/Rake
```

With the `--recursive` or `-r` option the repository will be cloned along with its submodules, if it doesn't happen you can always do it manually with the commands:

```bash
cd Rake
```
```bash
git submodule update --init
```

## Install Tools

All the steps below have been automated using a python script you can run by opening Rake's folder in VSCode (keep it open, you'll need it) and pressing `Ctrl + Shift + B` to run the `Install Tools` task. However if you encounter any issues you can follow these steps.

1. Python is available from the Microsoft Store or from this [website](https://www.python.org/downloads/), run the wizard and follow the instructions.

2. Premake5 can be download from this [website](https://premake.github.io/download). Choose the Windows option, unzip the file and put the premake executable wherever you want, however, it must be callable from the console.

## Python Prerequisites

Before starting you may need to install some Python modules. To do so you need Python and 'PIP' to be installed, after that run the following commands:

```bash
cd scripts
```
```bash
pip install -r requirements.txt
```

## Download Libraries

All the steps below have been automated using a python script you can run by opening Rake's folder in VSCode and pressing `Ctrl + Shift + B` to run the `Download libraries` task. However if you encounter any issues you can follow these steps.

1. The Vulkan library can be downloaded from this [website](https://sdk.lunarg.com/sdk/download/1.3.261.1/windows/VulkanSDK-1.3.261.1-Installer.exe) (Currently used version 1.3.261.1). When Vulkan is being installed an environment variable with it's path will automatically be created.

2. The Microsoft GameDK library can be downloaded from this [website](https://github.com/microsoft/GDK/archive/refs/tags/June_2023_Update_3.zip). After GameDK has been installed you'll have to run the enviroment setup scripts found in `C:\YourInstallPath\Microsoft GDK\CommandPrompts`.

3. The KTX Software library can be downloaded from this [website](https://github.com/KhronosGroup/KTX-Software/releases/download/v4.2.1/KTX-Software-4.2.1-Windows-arm64.exe). You'll need to manually create an environment variable named KTX_SOFTWARE containing the path to it's installaton.

4. The Libsodium library can be downloaded from this [website](https://github.com/jedisct1/libsodium/releases/download/1.0.19-RELEASE/libsodium-1.0.19-msvc.zip). You'll need to manually create an environment variable named LIBSODIUM containing the path to it's installaton.

Remember you can always tweak the `dependencies.lua` file if you have any special need or you simply want to experiment with different versions of the libraries.

## Generate solution files

Rake uses Premake5 to generate projects and build configurations, even in this case you can run the scripts in VScode or from `GenerateProjects.bat`.

## Finish Line

Rake setup is complete! You are ready to build and run the program! Double click the `.sln` file in Rake root folder and open it with Visual Studio 2022 and you are done. Good development!
