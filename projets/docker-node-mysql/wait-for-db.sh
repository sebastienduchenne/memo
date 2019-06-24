#!/bin/bash
until mysql -h mysql1 -u app_user -p password -e 'select 1'; do echo "still waiting for mysql"; sleep 1; done

exec node ./db/scripts/generateSequelizeCLIConfig.js
exec node_modules/sequelize-cli/bin/sequelize db:migrate
exec node_modules/sequelize-cli/bin/sequelize db:seed:all
exec npm start


#!/bin/bash
until mysql -h mysql1 -uapp_user -ppassword -e'select 1'; do echo "still waiting for mysql"; sleep 1; done
exec npm start
