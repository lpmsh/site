# import OS module
import os
import json
 

# from pathlib import Path
# print(Path.cwd())
# Get the list of all files and directories
path = "/Users/liammonaghan/JS/lpmsh/src/components/photos"
dir_list = os.listdir(path)
 
# print("Files and directories in '", path, "' :")
 
# prints all files
# print(dir_list)

importStatements = []
imageArray = []


for photo in dir_list:
    imageNum = f'image{dir_list.index(photo)}'
    importStatement = f"import image{dir_list.index(photo)} from './photos/{photo}'"
    importStatements.append(importStatement)
    imageArray.append(imageNum)





with open('./src/components/photoData.json', 'w') as f:
    json.dump(importStatements, f, indent=4)
    json.dump(imageArray, f, indent=4)