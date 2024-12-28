const player = {
    name : "mohamed salah",
    team : "egytion",
    goals : 5,
    scoreGoal : function(){
        console.log(`the goal : ${this.goals + 1}`);
    }


}
player.scoreGoal();
