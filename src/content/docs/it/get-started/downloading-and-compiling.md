---
title: Scaricamento E Compilazione
description: Guida al download e all'installazione di Rake Engine.
---

## Prerequisiti software

- Visual Studio Code
- Visual Studio 2022

## Scarica il codice

Puoi farlo sia clonando il repository tramite la riga di comando, sia dirigendoti alla [Pagina di Atterraggio di Rake](https://landing-rake-engine.netlify.app) e premendo il pulsante `Clone Code` che ti reindirizzerà alla pagina GitHub.

### Clona la repository

Apri la riga di comando e digita:

```bash
git clone --recursive https://github.com/WilliamKarolDiCioccio/Rake
```

Con l'opzione `--recursive` o `-r` il repository sarà clonato insieme ai suoi submoduli, se ciò non avviene puoi sempre farlo manualmente con i comandi:

```bash
cd Rake
```
```bash
git submodule update --init
```

## Installa gli strumenti

Tutti i passaggi sottostanti sono stati automatizzati tramite uno script Python che puoi eseguire aprendo la cartella di Rake in VSCode (mantenendola aperta, ne avrai bisogno) e premendo `Ctrl + Shift + B` per eseguire il compito `Install Tools`. Tuttavia, se incontri problemi, puoi seguire questi passaggi.

1. Python è disponibile nel Microsoft Store o da questo [sito web](https://www.python.org/downloads/), esegui la procedura guidata e segui le istruzioni.

2. Premake5 può essere scaricato da questo [sito web](https://premake.github.io/download). Scegli l'opzione per Windows, decomprimi il file e inserisci l'eseguibile premake ovunque tu voglia, tuttavia, deve essere richiamabile dalla console.

## Prerequisiti di Python

Prima di iniziare, potresti dover installare alcuni moduli Python. Per farlo, è necessario che Python e 'PIP' siano installati, dopo di che eseguire i seguenti comandi:

```bash
cd scripts
```
```bash
pip install -r requirements.txt
```

## Scarica le librerie

Tutti i passaggi sottostanti sono stati automatizzati tramite uno script Python che puoi eseguire aprendo la cartella di Rake in VSCode e premendo `Ctrl + Shift + B` per eseguire il compito `Download libraries`. Tuttavia, se incontri problemi, puoi seguire questi passaggi.

1. La libreria Vulkan può essere scaricata da questo [sito web](https://sdk.lunarg.com/sdk/download/1.3.261.1/windows/VulkanSDK-1.3.261.1-Installer.exe) (Versione attualmente utilizzata 1.3.261.1). Quando viene installato Vulkan, verrà creata automaticamente una variabile d'ambiente con il percorso di installazione.

2. La libreria Microsoft GameDK può essere scaricata da questo [sito web](https://github.com/microsoft/GDK/archive/refs/tags/June_2023_Update_3.zip). Dopo che GameDK è stato installato, dovrai eseguire gli script di configurazione dell'ambiente trovati in `C:\YourInstallPath\Microsoft GDK\CommandPrompts`.

3. La libreria KTX Software può essere scaricata da questo [sito web](https://github.com/KhronosGroup/KTX-Software/releases/download/v4.2.1/KTX-Software-4.2.1-Windows-arm64.exe). Dovrai creare manualmente una variabile d'ambiente chiamata KTX_SOFTWARE contenente il percorso di installazione.

4. La libreria Libsodium può essere scaricata da questo [sito web](https://github.com/jedisct1/libsodium/releases/download/1.0.19-RELEASE/libsodium-1.0.19-msvc.zip). Dovrai creare manualmente una variabile d'ambiente chiamata LIBSODIUM contenente il percorso di installazione.

Ricorda che puoi sempre personalizzare il file `dependencies.lua` se hai esigenze particolari o semplicemente vuoi sperimentare con diverse versioni delle librerie.

## Genera i file della soluzione

Rake utilizza Premake5 per generare progetti e configurazioni di compilazione, anche in questo caso puoi eseguire gli script in VScode o da `GenerateProjects.bat`.

## Bandiera Scacchi

La configurazione di Rake è completa! Sei pronto a compilare ed eseguire il programma! Fai doppio clic sul file `.sln` nella cartella radice di Rake e aprilo con Visual Studio 2022 e sei a posto. Buona programmazione!