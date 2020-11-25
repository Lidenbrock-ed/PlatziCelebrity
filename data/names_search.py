'''
  This file contains all functions and resources needed to validate whether a title
  refers to a celebrity or not
'''

import json

with open('dataset/names_categories_repository.json', encoding="utf8") as file:
  names_celebrities = json.load(file)


def find_name(title):
  for register in names_celebrities:

    name = names_celebrities[register]['name']
    category = names_celebrities[register]['category']

    is_any_famous_in_title = title.find(name)
    if is_any_famous_in_title != -1:
      return name, category

  return False, False


def find_name_celebrity(name_to_search):
  print(name_to_search)
  for register in names_celebrities:

    name = names_celebrities[register]['name']
    category = names_celebrities[register]['category']
    
    if(name == name_to_search):
      return name, category
    
  return False, False


def old_find_name(title):

  for celebrity in names_celebrities:

    name = names_celebrities[celebrity]

    if len(name) <= 5:
      continue

    is_any_famous_in_title = title.find(name)
    if is_any_famous_in_title != -1:
      #return True
      return name

  return False


def old_validate_if_name_exists(name):
  return name in names_celebrities.values()


if __name__ == "__main__":
  title = 'llega a colombia james rodriguez'
  if find_name(title):
    print('found')
  else:
    print('not found')