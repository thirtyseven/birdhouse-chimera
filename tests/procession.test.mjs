import {processionPose,protestArmsAt} from '../show/stage.js';
let checked=0;
for(let ref=127;ref<149;ref+=.25)for(let i=0;i<14;i++){
 const p=processionPose(ref,i),q=processionPose(ref+.0001,i),dx=q.x-p.x,dz=q.z-p.z;
 const alignment=(Math.sin(p.yaw)*dx+Math.cos(p.yaw)*dz)/Math.hypot(dx,dz);
 if(alignment<.99999)throw Error(`Extra ${i} faces away from travel at ${ref}: ${alignment}`);
 if(Math.abs((p.x/4.8)**2+((p.z+.7)/4)**2-1)>1e-10)throw Error('Path left its ellipse');
 checked++;
}
console.log(`${checked} position/facing samples passed: every extra faces the direction of travel.`);

for(let beat=210;beat<=246;beat++){
 const t=.3+beat*.571429,on=protestArmsAt(t),off=protestArmsAt(t+.571429/2);
 if(Math.abs(on[0].thrust-1)>1e-9||off[0].thrust>1e-9)throw Error(`Right fist missed beat ${beat}`);
 if(on[1].thrust!==0||JSON.stringify(on[1])!==JSON.stringify(off[1]))throw Error('Left arm must not thrust');
}
console.log('37 MIDI beats passed: right fist peaks on-beat, retracts off-beat; left arm stays down.');
