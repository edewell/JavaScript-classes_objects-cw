// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an instance of the class and use the function.

class GitHub{
    constructor(name, file, desc, code){
        this.userName = name;
        this.fileName = file;
        this.descriptionOfRepository = desc;
        this.code = code;
    }
}

function main() {
    let user = new GitHub('Eddie Ewell III', 'Class Repo', 'Daily Repo for class', 'html')
    console.log(user);
}

main();