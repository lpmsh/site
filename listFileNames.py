# import OS module
import os
import json
import platform
from pathlib import Path
 

print(Path.cwd())
path = ''

if platform.system() == 'Windows':
    path = 'D:/lpmsh/src/components/photos'
elif platform.system() == 'Darwin':
    path = "/Users/liammonaghan/JS/lpmsh/src/components/photos"

dir_list = os.listdir(path)
 
# print("Files and directories in '", path, "' :")
 
# prints all files
# print(dir_list)

importStatements = []
imageArray = []


for photo in dir_list:
    if dir_list.index(photo) + 1 > 18:
        break
    else:
        highQualitySrc = f'image{dir_list.index(photo) + 1}'
        lowQualitySrc = f'image{dir_list.index(photo) + 1}Scaled'
        highQaulityImportStatement = f"import image{dir_list.index(photo) + 1} from './photos/{photo}'"
        lowQualityImportStatement = f"import image{dir_list.index(photo) + 1}Scaled from './photos/{photo}'"
        importStatements.append(highQaulityImportStatement)
        importStatements.append(lowQualityImportStatement)
        imageArray.append([lowQualitySrc, highQualitySrc, f"useProgressiveImg('{lowQualitySrc, highQualitySrc}')"])





with open('./src/components/photoData.json', 'w') as f:
    json.dump(importStatements, f, indent=4)
    json.dump(imageArray, f, indent=4)