export class Player {
    /**
     * 
     * @param {string} name name of the player 
     */
    constructor(playerName, score){
        this.playerName = playerName;
        this.score = score;
        
    }

    //save the player object into the localStorage
    savePlayer(){
        if(localStorage.getItem('ranking') === null) {
            let  newRank = []
            localStorage.setItem('ranking', JSON.stringify(newRank))
        }else{
            let ranking = JSON.parse(localStorage.getItem("ranking"))
            let player = {
                name: this.playerName,
                score: this.score
            }            
            ranking.push(player)
            localStorage.setItem("ranking", JSON.stringify(ranking))
            return ranking.sort((a,b) => b.score - a.score)
        }
    }
} 


