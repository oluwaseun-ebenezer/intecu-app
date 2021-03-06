import {setDownloadSpeed} from './download.js';
import {setBrowsingSpeed} from './browse.js';


export async function getInternetTest(){
    const b_speed = setBrowsingSpeed();
    const d_speed = setDownloadSpeed();
    
    const [browse,down] = await Promise.all([d_speed,b_speed]);

    console.log(browse,down);
    if(browse.success && down.success){
        return({
            'completion'    :   true,
            'down'  :   down.speed,
            'browse'    :   browse.speed,
        });
    } else{
        console.log('Speed Test crashed...');
        return({
            'completion' :   false,
        });
    }
} 
