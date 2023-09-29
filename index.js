window.onload = (event) => {

    let levelValue = "";
    const lbToOz = 16;

    const toggle = document.getElementById('switch');

    let lose =document.getElementById('lose');
    let maintain =document.getElementById('maintain');
    let gain =document.getElementById('gain');
    let curweight = document.getElementById('curweight');
    const options = document.querySelectorAll('input[name="level"]')

    function changeGoal(kitten){
        let goal = document.getElementsByClassName('goal');
        let month = document.getElementsByClassName('goal_level')
        if(kitten){
            for(let i = 0; i < goal.length; i++){
                goal[i].innerText = 'Kitten';
                switch(i){
                    case 0:
                        month[i].innerText = '2 - 4 months';
                        break;
                    
                    case 1:
                        month[i].innerText = '4 - 8 months';
                        break;
                            
                    case 2:
                        month[i].innerText = '8 - 12 months';
                        break;
                }
            }
                        
        } else{
            for(let i = 0; i < goal.length; i++){
                goal[i].innerText = 'goal';
                switch(i){
                    case 0:
                        month[i].innerText = 'Lose Weight';
                        break;
                    
                    case 1:
                        month[i].innerText = 'Maintain Weight';
                        break;
                            
                    case 2:
                        month[i].innerText = 'Gain Weight';
                        break;
                }
            }
        }
    }

    function calculation(){
        checkLevel();
        changeGoal(toggle.checked);
            // console.log('toggle off')
                lose.innerHTML = `${parseFloat(losing(toggle.checked,levelValue,curweight.value)).toFixed(2)} oz`;
                maintain.innerHTML = `${parseFloat(maintaining(toggle.checked,levelValue,curweight.value)).toFixed(2)} oz`;
                gain.innerHTML = `${parseFloat(gaining(toggle.checked,levelValue,curweight.value)).toFixed(2)} oz`;
    }

    function losing(age, level, weight){
        switch(age){
            case false:
                switch (level){
                    case '0':
                        return weight * 0.016 * lbToOz;
                    case '1':
                        return weight * 0.02 * lbToOz;
                    case '2':
                        return weight * 0.02 * lbToOz;
                }
            case true:
                switch (level){
                    case '0':
                        return weight * 0.06 * lbToOz;
                    case '1':
                        return weight * 0.08 * lbToOz;
                    case '2':
                        return weight * 0.10 * lbToOz;
                }
            default: return 0;
        }
    }

    function maintaining(age, level, weight){
        switch(age){
            case false:
                switch(level){
                    case '0':
                        return weight * 0.02 * lbToOz;
                    case '1':
                        return weight * 0.025 * lbToOz;
                    case '2':
                        return weight * 0.03 * lbToOz;                
                }
            case true:
                switch(level){
                    case '0': 
                        return weight * 0.07 * lbToOz;
                    case '1':
                        return weight * 0.08 * lbToOz;
                    case '2':
                        return weight* 0.09 * lbToOz;
                }
            default: return 0;
        }
    }


    function gaining(age, level, weight){
        switch(age){
            case false:
                switch(level){
                    case '0':
                        return weight * 0.025 * lbToOz;
                    case '1':
                        return weight * 0.03 * lbToOz;
                    case '2':
                        return weight * 0.035 * lbToOz;                
                }
            case true:
                switch(level){
                    case '0': 
                        return weight * 0.03 * lbToOz;
                    case '1':
                        return weight * 0.05 * lbToOz;
                    case '2':
                        return weight* 0.06 * lbToOz;
                }
            default: return 0;
        }
    }
    
    function checkLevel(){
        for (const option of options){
            if(option.checked)
                levelValue = option.value;
        }         
    }
    inactive.addEventListener("click",calculation)
    normal.addEventListener("click",calculation)
    active.addEventListener("click",calculation)
    curweight.addEventListener("input", calculation)
    toggle.addEventListener("click",calculation)
};
