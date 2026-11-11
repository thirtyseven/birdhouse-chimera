/** Birdhouse opening study. All imagery is procedural geometry; no image/video textures. */
export function createStage(T, renderer, { createStockHead }) {
  const scene = new T.Scene(); scene.background = new T.Color(0x000201);
  const camera = new T.PerspectiveCamera(40, 4/3, .01, 120);
  renderer.setClearColor(0x000201); renderer.outputColorSpace = T.LinearSRGBColorSpace;
  const roots = [new T.Group(),new T.Group(),new T.Group(),new T.Group()];
  roots.forEach(g=>scene.add(g));
  const [intro, bulb, hall, feet] = roots;
  const mat=(c,metal=0)=>new T.MeshStandardMaterial({color:c,roughness:.72,metalness:metal});
  const black=mat(0x020305), stone=mat(0x73604d), trim=mat(0x927353), hairMat=new T.MeshBasicMaterial({color:0x80563b});
  const mesh=(g,geo,m,x=0,y=0,z=0)=>{const o=new T.Mesh(geo,m);o.position.set(x,y,z);g.add(o);return o;};
  const box=(g,w,h,d,m,x,y,z)=>mesh(g,new T.BoxGeometry(w,h,d),m,x,y,z);
  const ball=(g,x,y,z,sx,sy,sz,m)=>{const o=mesh(g,new T.SphereGeometry(1,24,16),m,x,y,z);o.scale.set(sx,sy,sz);return o;};
  const tube=(g,pts,r,m)=>mesh(g,new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p))),100,r,8,false),m);
  scene.add(new T.AmbientLight(0x938d97,2.1));
  const key=new T.PointLight(0xffc394,100,30,2);key.position.set(-3,3,5);scene.add(key);
  const fill=new T.PointLight(0x919ee0,50,25,2);fill.position.set(4,2,3);scene.add(fill);
  const stock=createStockHead(); intro.add(stock.group);
  // Stock Chimera anatomy with only a parted, sweeping brown hairstyle added.
  const hair=new T.Group(); stock.group.add(hair);
  // Group is in centimetres and faces +X before the stock wrapper turns it toward camera.
  for(let side of [-1,1]) for(let i=0;i<15;i++) {
    const k=i/14;
    tube(hair,[[7,13.4,-.5],[8,12.8,side*(2+k*2)],[8-k*3,10.5,side*(5.3+k)],[4-k*3,6.7-k,side*(6.1+k*.7)]], .40, hairMat);
  }
  const bulbs=[];
  for(let i=0;i<44;i++) {
    const a=i/44*Math.PI*2;
    const m=new T.MeshBasicMaterial({color:0xff651b,transparent:true,opacity:0});
    const o=ball(intro,1.33*Math.cos(a),1.05*Math.sin(a),-.03,.024,.04,.025,m);o.rotation.z=a-Math.PI/2;
    const halo=ball(intro,o.position.x,o.position.y,-.04,.055,.065,.025,new T.MeshBasicMaterial({color:0xb1390b,transparent:true,opacity:0,depthWrite:false,blending:T.AdditiveBlending}));
    bulbs.push([o,halo]);
  }
  const orange=new T.MeshBasicMaterial({color:0xffa129});
  const hot=new T.MeshBasicMaterial({color:0xffe4a0});
  const filament=new T.Group();bulb.add(filament);
  for(let j=0;j<3;j++) {
    const pts=[];
    for(let i=0;i<=90;i++){const a=i/90*Math.PI*2;pts.push([Math.sin(a)*(.25+j*.025)+Math.sin(a*.5)*j*.05, -.95+1.28*Math.sin(a/2), Math.cos(a)*.06+j*.025]);}
    tube(filament,pts,.012,hot);
    tube(filament,pts,.026,new T.MeshBasicMaterial({color:0xff8a18,transparent:true,opacity:.36,blending:T.AdditiveBlending,depthWrite:false}));
    tube(filament,pts,.065,new T.MeshBasicMaterial({color:0xc8490a,transparent:true,opacity:.065,blending:T.AdditiveBlending,depthWrite:false}));
  }
  tube(filament,[[-.07,-1.5,0],[-.06,-.9,0],[.01,-.72,0]],.011,orange);
  tube(filament,[[.09,-1.5,0],[.07,-1,0],[-.01,-.75,0]],.011,orange);
  const glass=mesh(bulb,new T.LatheGeometry([new T.Vector2(.12,-1.65),new T.Vector2(.18,-1.1),new T.Vector2(.46,-.5),new T.Vector2(.45,.27),new T.Vector2(.22,.55),new T.Vector2(0,.58)],64),new T.MeshPhysicalMaterial({color:0x92450c,transparent:true,opacity:.10,roughness:.18,side:T.DoubleSide}));
  // Ornate stone balcony: curved mouldings, turned balusters, columns and carved arch.
  box(hall,25,20,.8,stone,0,3,-3);
  for(let i=0;i<7;i++)box(hall,16,.12+i%2*.09,.3+i%3*.12,trim,0,4+i*.18,-2.45);
  for(let x of [-4.3,4.3]) {
    mesh(hall,new T.CylinderGeometry(.52,.64,7,40),stone,x,.5,-1.85);
    for(let y of [-2.7,3.6]) {box(hall,1.55,.32,1.3,trim,x,y,-1.8);box(hall,1.28,.25,1.15,stone,x,y+.26,-1.8);}
    for(let i=0;i<12;i++){let a=i/12*Math.PI*2;ball(hall,x+Math.cos(a)*.49,3.25+Math.sin(a)*.18,-1.2,.14,.25,.12,trim);}
  }
  for(let k=0;k<4;k++){
    const pts=[];for(let i=0;i<=60;i++){const a=i/60*Math.PI;pts.push([Math.cos(a)*(4-k*.14),.2+Math.sin(a)*(3.25-k*.12),-2.25+k*.06]);}tube(hall,pts,.08,trim);
  }
  for(let i=0;i<65;i++) {const a=i/64*Math.PI; const x=3.45*Math.cos(a),y=.25+2.8*Math.sin(a);const leaf=ball(hall,x,y,-2.08,.08,.19,.07,trim);leaf.rotation.z=a-.6;}
  const railing=new T.Group();hall.add(railing);
  const profile=[[-1.8,.23],[-1.7,.24],[-1.6,.15],[-1.5,.14],[-1.3,.25],[-1.08,.27],[-.88,.13],[-.43,.10],[-.3,.20],[-.18,.20]];
  for(let i=-6;i<=6;i++) {
    const x=i*.68,z=.65-.075*x*x;
    mesh(railing,new T.LatheGeometry(profile.map(([y,r])=>new T.Vector2(r,y)),16),stone,x,0,z);
    box(railing,.52,.18,.50,trim,x,-.14,z);box(railing,.46,.16,.48,trim,x,-1.85,z);
  }
  for(let k=0;k<4;k++) {
    const pts=[];for(let i=0;i<=60;i++){let x=-5+i/6;pts.push([x,.03+k*.10,.65-.075*x*x]);}tube(railing,pts,.14+(k%2)*.04,k%2?trim:stone);
  }
  const performer=new T.Group();hall.add(performer);performer.position.set(0,.3,-.35);
  ball(performer,0,.35,0,.5,.65,.24,black);box(performer,.33,.23,.30,black,0,.97,0);
  for(let x of [-.5,.5]){const arm=box(performer,.18,.8,.22,black,x,.2,.05);arm.rotation.z=-x*.28;}
  const balconyHead=createStockHead();performer.add(balconyHead.group);balconyHead.group.position.y=1.45;balconyHead.group.scale.setScalar(.036);
  const hair2=hair.clone();balconyHead.group.add(hair2);
  // Final low camera angle: dark trousers, white rubber toes and crossed laces.
  box(feet,20,.15,20,mat(0x62616b),0,-.1,-3);
  const shoePairs=[];
  for(let row=0;row<4;row++)for(let side of [-1,1]) {
    const leg=new T.Group();feet.add(leg);leg.position.set(side*.24+(row%2)*.25,0,-row*1.1);shoePairs.push(leg);
    mesh(leg,new T.CylinderGeometry(.13,.16,1.8,12),mat(0x0c1422),0,1.25,0);
    const shoe=ball(leg,0,.19,.12,.19,.16,.40,mat(0x15191e));
    ball(leg,0,.16,.40,.18,.12,.16,mat(0xd1d0c9));box(leg,.37,.065,.72,mat(0xc6c4bd),0,.075,.12);
    for(let i=0;i<5;i++){let z=.05+i*.05; tube(leg,[[-.12,.33,z],[.12,.33,z+.055]],.012,mat(0xd6d4c9));tube(leg,[[.12,.334,z],[-.12,.334,z+.055]],.012,mat(0xd6d4c9));}
  }
  const smooth=(a,b,t)=>{let x=T.MathUtils.clamp((t-a)/(b-a),0,1);return x*x*(3-2*x);};
  // Approximate articulatory beats for the intro; no facial replacement or video sampling.
  const syllables=[.83,1.02,1.27,1.52,1.87,2.65,2.9,3.12,3.4,3.62,4.02,4.65,4.86,5.1,5.35,5.62,5.89,6.13,6.48,7.02,7.3,7.55,7.8,8.03,8.25,8.46,8.68,8.92,9.14,9.55,10.2,10.55,10.95];
  const mouth=t=>Math.max(.015,...syllables.map(s=>.75*Math.exp(-(((t-s)/.12)**2))));
  function render(t) {
    t=T.MathUtils.clamp(t,0,20);
    const shot=t<11.18?0:t<15.683?1:t<19.269?2:3;
    roots.forEach((g,i)=>g.visible=i===shot);
    camera.fov=40;
    if(shot===0){
      camera.position.set(0,0,4);camera.lookAt(0,0,0);
      stock.group.visible=t>.55;stock.group.position.set(.025*Math.sin(t*1.1),-.025*Math.sin(t*1.9),0);
      stock.group.rotation.y=-Math.PI/2+.15*Math.sin(t*1.8);stock.update(t,mouth(t));
      const fade=smooth(.55,1.2,t)*(1-smooth(10.8,11.18,t));
      renderer.setClearColor(0x000201);
      stock.group.scale.setScalar(.028*fade);
      bulbs.forEach(([b,h],i)=>{const v=smooth(6.1,8.4,t)*(1-smooth(10.9,11.18,t))*(.8+.2*Math.sin(i*1.9+t*2));b.material.opacity=v;h.material.opacity=v*.16;});
    } else if(shot===1){
      camera.position.set(0,-.2,3.2);camera.lookAt(0,-.2,0);
      filament.scale.setScalar(.65+smooth(11.18,15.683,t)*.6);
      filament.rotation.z=.025*Math.sin(t*2);filament.rotation.y=(t-11.18)*.16;
      const v=smooth(11.18,12,t);hot.color.setRGB(v*1.8,v*.9,v*.26);glass.material.opacity=.015+.12*smooth(13,15.6,t);
    } else if(shot===2){
      camera.fov=56;camera.position.set(.13*Math.sin(t*2),-1.65,3.1);camera.lookAt(0,1.35,-1);
      balconyHead.update(t,.3+.25*Math.sin(t*12));balconyHead.group.rotation.y=-Math.PI/2+.25*Math.sin(t*2);
      performer.rotation.y=.06*Math.sin(t*3);hall.rotation.z=.012*Math.sin(t*1.2);
    } else {
      camera.fov=49;camera.position.set(.5,.35,1.4);camera.lookAt(0,.20,-.7);
      shoePairs.forEach((g,i)=>{g.position.y=Math.max(0,Math.sin((t-19.269)*10+i*.8))*.09;});
    }
    camera.updateProjectionMatrix(); renderer.render(scene,camera);
  }
  return {render,dispose(){stock.dispose();balconyHead.dispose();scene.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});}};
}
