class Storage {

    static getSearchedUsersFromStorage(){
        // Tüm Kullanıcıları Al
        let users;
        if(localStorage.getItem("searched") === null){
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;

    }

    static addSearchedUserToStorage(username){ 
        // Kullanıcı Ekle
        let users = this.getSearchedUsersFromStorage();

        // Indexof ile değerin dizide olup olmadığını kontrol etmek
        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
        

    }

    static clearAllSearchedUsersFromStorage(){
        // Tüm Kullanıcıları Silme
        localStorage.removeItem("searched");
    }

}