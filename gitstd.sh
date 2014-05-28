if [ -z $1 ]
 then
  echo 'No message supplied. Please supply one.'
  exit 0
fi
git add .
git commit -a -m '$1'
git push