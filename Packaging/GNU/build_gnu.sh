# GNU BUILD SCRIPT

project=Sofia\ Woodwinds
version=1.1.1
xmlFile=sofiaWoodwinds
workspace=/media/john/SHARED/HISEProjects/sofiawoodwinds

clean_project=1
build_plugin=1
build_standalone=0
build_installer=0

hise_path=/media/john/SHARED/HISE/projects/standalone/Builds/LinuxMakefile/build/HISE\ Standalone
projucer_path=/media/john/SHARED/HISE/tools/projucer/Projucer
makeself_path=/media/john/SHARED/makeself

cd "$workspace"/Binaries

# STEP 1: BUILDING THE BINARIES
# ====================================================================
if (($build_standalone == 1 || $build_plugin == 1))
then

  "$hise_path" set_project_folder -p:$workspace
  "$hise_path" set_version -v:$version

  if (($clean_project == 1))
  then
     "$hise_path" clean -p:$workspace --all
  fi

  echo Making the Projucer accessible for this project
  chmod +x "$projucer_path"

  if (($build_plugin==1))
  then
    echo Building the plugins
    "$hise_path" export_ci XmlPresetBackups/$xmlFile.xml -t:instrument -p:VST -a:x64
    chmod +x "$workspace"/Binaries/batchCompileLinux.sh
    sh "$workspace"/Binaries/batchCompileLinux.sh
  fi
  
  if (($build_standalone==1))
  then
    echo Building the standalone app
    "$hise_path" export_ci XmlPresetBackups/$xmlFile.xml -t:standalone -a:x64
    chmod +x "$workspace"/Binaries/batchCompileLinux.sh
    sh "$workspace"/Binaries/batchCompileLinux.sh
  fi
fi

# STEP 2: BUILDING INSTALLER
# ====================================================================

if (($build_installer==1))
then
  echo "Build Installer"
  
  #Create installer directory and copy temp files into it
  mkdir -p "$workspace"/Installer/temp
  cp "$workspace"/Binaries/Builds/LinuxMakefile/build/"$project" "$workspace"/Installer/temp
  cp "$workspace"/Binaries/Builds/LinuxMakefile/build/"$project".so "$workspace"/Installer/temp
  cp "$workspace"/License.txt "$workspace"/Installer/temp
  cp "$workspace"/Packaging/GNU/GNUInstaller.sh "$workspace"/Installer/temp
  
  cd "$workspace"/Installer/
  
  #Run makeself
  sh "$makeself_path"/makeself.sh --license License.txt "$workspace"/Installer/temp "$workspace"/Installer/"$project".$version.installer.sh "$project" ./GNUInstaller.sh
  
  echo Cleanup
  cd "$workspace"
  rm -rf "$workspace"/Installer/temp
    
else
  echo "Skip Building Installer"
fi