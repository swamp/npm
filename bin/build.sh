#---------------------------------------------------------------------------------------------
#  Copyright (c) Peter Bjorklund. All rights reserved.
#  Licensed under the MIT License. See LICENSE in the project root for license information.
#--------------------------------------------------------------------------------------------
rm swamp-compiler-*.tgz
npm version $1
npm pack ../
tar -z --list --verbose -f swamp-compiler-*.tgz
