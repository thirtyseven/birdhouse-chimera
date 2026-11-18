import {processionPose} from '../show/stage.js';
let checked=0;
for(let ref=127;ref<149;ref+=.25)for(let i=0;i<14;i++){
 const p=processionPose(ref,i),q=processionPose(ref+.0001,i),dx=q.x-p.x,dz=q.z-p.z;
 const alignment=(Math.sin(p.yaw)*dx+Math.cos(p.yaw)*dz)/Math.hypot(dx,dz);
 if(alignment<.99999)throw Error(`Extra ${i} faces away from travel at ${ref}: ${alignment}`);
 if(Math.abs((p.x/4.8)**2+((p.z+.7)/4)**2-1)>1e-10)throw Error('Path left its ellipse');
 checked++;
}
console.log(`${checked} position/facing samples passed: every extra faces the direction of travel.`);
