## ResourceFull Query Practice

The purpose of this repository is to seed a database with a table that pertains to the lab activity to draft query statements. You will need these tools: secrets, pgAdmin 4, and repository access to run the command necessary to get the mock data set up locally.

## secrets.json file

The secrets.json file houses the necessary credentials for your local device to access the local database.

1. The Engineering Manager will supply you with a secrets.json file.

2. In the secrets.json file, you must supply your own password. IMPORTANT: Use this same password for local development and debugging when onboarded to ResourceFull.

## pgAdmin 4 Download

pgAdmin 4 allows us to query and view the data in our databases on our devices.

1. Go to https://www.pgadmin.org/download/pgadmin-4-macos/ by hovering over the underlined site link, then pressing Command and clicking the link.

2. When browser opens, select the most recent release version.

3. Then select the application format for your operating system.

4. After .dmg download completes, navigate to Finder > Downloads > double-click .dmg.

5. An installation window opens. Agree to the terms.

6. Then, when prompted, click and drag pgAdmin 4 to copy to your Applications folder.

7. Once complete, close out of the installation window. Go to Finder > Locations (left sidebar) > pgAdmin 4 > click eject.

8. Go to Finder > Applications > scroll to pgAdmin 4 > click + drag to Dock for ease of opening the application in the future.

## pgAdmin 4 Local Database Setup

1. Open pgAdmin 4.

2. Control + click Servers (left sidebar).

3. Select Register > Server.

4. In General tab, Name input field, give your local database an appropriate name.

5. In Connection tab, reference the secrets.json file to enter info for:

- Host name/address
- Password
  (You may want to Save Password)

6. Click Save.

## Github Repository Access

1. Supply your Engineering Manager with your Github handle to gain access to the repository.

2. Clone the repo.

3. Use VS Code to open the repo.

4. Open VS Code Terminal to install packages by running this command: npm install

5. Once packages have been installed, run this command to seed your database with mock data for one table: yarn seed

6. You will be prompted to enter your secrets.json password twice. Do so.

7. Then navigate to pgAdmin 4 > Servers > (your db name) > Databases > Schemas > public > Tables > provider_participant_intake to view data.

## pg Admin 4 Common Table Options

In pgAdmin 4, control + click provider_participant_intake to view common table options:

1. View/Edit Data > All Rows: allows you to see all rows of data in that table

2. Query Tool: allows you to run PostgreSQL queries. Use this tool to help you draft your query statements.