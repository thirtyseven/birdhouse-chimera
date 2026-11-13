/** Full procedural shot study. Only geometry, procedural materials, and Chimera anatomy. */
export async function createStage(T, renderer, api) {
  const timeline = {
  "duration": 184,
  "anchors": [
    [
      0,
      0
    ],
    [
      0.7,
      0.3
    ],
    [
      15.683,
      14.3000105
    ],
    [
      34.618,
      32.5860242145
    ],
    [
      60.143,
      56.58604221449999
    ],
    [
      98.057,
      92.87106942825001
    ],
    [
      108.025,
      102.30007649999999
    ],
    [
      133.383,
      126.30009449999999
    ],
    [
      148.649,
      140.72910532175
    ],
    [
      163.747,
      154.44311560725
    ],
    [
      177.636,
      168.15712589275003
    ],
    [
      191.066,
      180.47655847500005
    ],
    [
      196.181,
      184
    ]
  ],
  "shots": [
    {
      "id": 0,
      "sourceStart": 0,
      "sourceEnd": 11.18,
      "start": 0.0,
      "end": 10.092407344299998,
      "kind": "intro"
    },
    {
      "id": 1,
      "sourceStart": 11.18,
      "sourceEnd": 15.683,
      "start": 10.092407344299998,
      "end": 14.3000105,
      "kind": "filament"
    },
    {
      "id": 2,
      "sourceStart": 15.683,
      "sourceEnd": 19.269,
      "start": 14.3000105,
      "end": 17.763113097325,
      "kind": "balcony"
    },
    {
      "id": 3,
      "sourceStart": 19.269,
      "sourceEnd": 20.521,
      "start": 17.763113097325,
      "end": 18.97221400415,
      "kind": "shoes"
    },
    {
      "id": 4,
      "sourceStart": 20.521,
      "sourceEnd": 23.023,
      "start": 18.97221400415,
      "end": 21.388415816300004,
      "kind": "balcony_close"
    },
    {
      "id": 5,
      "sourceStart": 23.023,
      "sourceEnd": 27.736,
      "start": 21.388415816300004,
      "end": 25.939919229925007,
      "kind": "city"
    },
    {
      "id": 6,
      "sourceStart": 27.736,
      "sourceEnd": 30.03,
      "start": 25.939919229925007,
      "end": 28.155320891475004,
      "kind": "guitar_balcony"
    },
    {
      "id": 7,
      "sourceStart": 30.03,
      "sourceEnd": 34.618,
      "start": 28.155320891475004,
      "end": 32.5860242145,
      "kind": "room_wide"
    },
    {
      "id": 8,
      "sourceStart": 34.618,
      "sourceEnd": 36.703,
      "start": 32.5860242145,
      "end": 34.5464256848,
      "kind": "torch_face"
    },
    {
      "id": 9,
      "sourceStart": 36.703,
      "sourceEnd": 37.454,
      "start": 34.5464256848,
      "end": 35.252626214450004,
      "kind": "room_guitar"
    },
    {
      "id": 10,
      "sourceStart": 37.454,
      "sourceEnd": 38.997,
      "start": 35.252626214450004,
      "end": 36.703427302550004,
      "kind": "mirror_red"
    },
    {
      "id": 11,
      "sourceStart": 38.997,
      "sourceEnd": 39.957,
      "start": 36.703427302550004,
      "end": 37.6060279795,
      "kind": "helmet"
    },
    {
      "id": 12,
      "sourceStart": 39.957,
      "sourceEnd": 43.794,
      "start": 37.6060279795,
      "end": 41.213830685350004,
      "kind": "mirror"
    },
    {
      "id": 13,
      "sourceStart": 43.794,
      "sourceEnd": 44.67,
      "start": 41.213830685350004,
      "end": 42.037431303050006,
      "kind": "helmet_close"
    },
    {
      "id": 14,
      "sourceStart": 44.67,
      "sourceEnd": 46.255,
      "start": 42.037431303050006,
      "end": 43.52773242077502,
      "kind": "mirror_flans"
    },
    {
      "id": 15,
      "sourceStart": 46.255,
      "sourceEnd": 47.214,
      "start": 43.52773242077502,
      "end": 44.42943309705,
      "kind": "tools"
    },
    {
      "id": 16,
      "sourceStart": 47.214,
      "sourceEnd": 48.507,
      "start": 44.42943309705,
      "end": 45.645234008900005,
      "kind": "mirror_flans"
    },
    {
      "id": 17,
      "sourceStart": 48.507,
      "sourceEnd": 49.508,
      "start": 45.645234008900005,
      "end": 46.5864347148,
      "kind": "weld_close"
    },
    {
      "id": 18,
      "sourceStart": 49.508,
      "sourceEnd": 51.051,
      "start": 46.5864347148,
      "end": 48.03723580290001,
      "kind": "mirror"
    },
    {
      "id": 19,
      "sourceStart": 51.051,
      "sourceEnd": 51.301,
      "start": 48.03723580290001,
      "end": 48.27233597922501,
      "kind": "mirror_dark"
    },
    {
      "id": 20,
      "sourceStart": 51.301,
      "sourceEnd": 53.845,
      "start": 48.27233597922501,
      "end": 50.664337773225,
      "kind": "torch_tools"
    },
    {
      "id": 21,
      "sourceStart": 53.845,
      "sourceEnd": 60.143,
      "start": 50.664337773225,
      "end": 56.58604221449999,
      "kind": "hall_wide"
    },
    {
      "id": 22,
      "sourceStart": 60.143,
      "sourceEnd": 61.603,
      "start": 56.58604221449999,
      "end": 57.98334326247501,
      "kind": "mirror_guitar"
    },
    {
      "id": 23,
      "sourceStart": 61.603,
      "sourceEnd": 64.731,
      "start": 57.98334326247501,
      "end": 60.976945507675,
      "kind": "hall_wide"
    },
    {
      "id": 24,
      "sourceStart": 64.731,
      "sourceEnd": 67.067,
      "start": 60.976945507675,
      "end": 63.212547184375005,
      "kind": "bicycles"
    },
    {
      "id": 25,
      "sourceStart": 67.067,
      "sourceEnd": 69.236,
      "start": 63.212547184375005,
      "end": 65.28834874122501,
      "kind": "city"
    },
    {
      "id": 26,
      "sourceStart": 69.236,
      "sourceEnd": 71.864,
      "start": 65.28834874122501,
      "end": 67.80345062754999,
      "kind": "hall_guitar"
    },
    {
      "id": 27,
      "sourceStart": 71.864,
      "sourceEnd": 72.99,
      "start": 67.80345062754999,
      "end": 68.88105143575,
      "kind": "city"
    },
    {
      "id": 28,
      "sourceStart": 72.99,
      "sourceEnd": 73.782,
      "start": 68.88105143575,
      "end": 69.63905200425,
      "kind": "mirror_guitar"
    },
    {
      "id": 29,
      "sourceStart": 73.782,
      "sourceEnd": 74.158,
      "start": 69.63905200425,
      "end": 69.99885227410002,
      "kind": "mirror_dark"
    },
    {
      "id": 30,
      "sourceStart": 74.158,
      "sourceEnd": 79.163,
      "start": 69.99885227410002,
      "end": 74.7888558666,
      "kind": "bulbs"
    },
    {
      "id": 31,
      "sourceStart": 79.163,
      "sourceEnd": 83.0,
      "start": 74.7888558666,
      "end": 78.460958620675,
      "kind": "helmet_arms"
    },
    {
      "id": 32,
      "sourceStart": 83.0,
      "sourceEnd": 84.585,
      "start": 78.460958620675,
      "end": 79.97785975835002,
      "kind": "crowd_close"
    },
    {
      "id": 33,
      "sourceStart": 84.585,
      "sourceEnd": 85.335,
      "start": 79.97785975835002,
      "end": 80.6956602967,
      "kind": "helmet_arms"
    },
    {
      "id": 34,
      "sourceStart": 85.335,
      "sourceEnd": 87.212,
      "start": 80.6956602967,
      "end": 82.492061644,
      "kind": "crowd_close"
    },
    {
      "id": 35,
      "sourceStart": 87.212,
      "sourceEnd": 88.88,
      "start": 82.492061644,
      "end": 84.08836284122502,
      "kind": "helmet_arms"
    },
    {
      "id": 36,
      "sourceStart": 88.88,
      "sourceEnd": 92.509,
      "start": 84.08836284122502,
      "end": 87.56146544605002,
      "kind": "tuba"
    },
    {
      "id": 37,
      "sourceStart": 92.509,
      "sourceEnd": 93.718,
      "start": 87.56146544605002,
      "end": 88.71846631380001,
      "kind": "trumpet"
    },
    {
      "id": 38,
      "sourceStart": 93.718,
      "sourceEnd": 98.057,
      "start": 88.71846631380001,
      "end": 92.87106942825001,
      "kind": "tuba"
    },
    {
      "id": 39,
      "sourceStart": 98.057,
      "sourceEnd": 108.025,
      "start": 92.87106942825001,
      "end": 102.30007649999999,
      "kind": "bridge"
    },
    {
      "id": 40,
      "sourceStart": 108.025,
      "sourceEnd": 112.363,
      "start": 102.30007649999999,
      "end": 106.40577957927499,
      "kind": "shoes"
    },
    {
      "id": 41,
      "sourceStart": 112.363,
      "sourceEnd": 117.701,
      "start": 106.40577957927499,
      "end": 111.45788336835001,
      "kind": "crowd"
    },
    {
      "id": 42,
      "sourceStart": 117.701,
      "sourceEnd": 127.461,
      "start": 111.45788336835001,
      "end": 120.695190296325,
      "kind": "chair"
    },
    {
      "id": 43,
      "sourceStart": 127.461,
      "sourceEnd": 133.383,
      "start": 120.695190296325,
      "end": 126.30009449999999,
      "kind": "hall_wide"
    },
    {
      "id": 44,
      "sourceStart": 133.383,
      "sourceEnd": 137.137,
      "start": 126.30009449999999,
      "end": 129.84829716115,
      "kind": "eyes"
    },
    {
      "id": 45,
      "sourceStart": 137.137,
      "sourceEnd": 140.432,
      "start": 129.84829716115,
      "end": 132.96259949687501,
      "kind": "hall_wide"
    },
    {
      "id": 46,
      "sourceStart": 140.432,
      "sourceEnd": 142.392,
      "start": 132.96259949687501,
      "end": 134.81520088632502,
      "kind": "mountains"
    },
    {
      "id": 47,
      "sourceStart": 142.392,
      "sourceEnd": 143.518,
      "start": 134.81520088632502,
      "end": 135.879401684475,
      "kind": "pipe"
    },
    {
      "id": 48,
      "sourceStart": 143.518,
      "sourceEnd": 144.061,
      "start": 135.879401684475,
      "end": 136.39260206937502,
      "kind": "mountains"
    },
    {
      "id": 49,
      "sourceStart": 144.061,
      "sourceEnd": 145.187,
      "start": 136.39260206937502,
      "end": 137.45690286759998,
      "kind": "mountains_close"
    },
    {
      "id": 50,
      "sourceStart": 145.187,
      "sourceEnd": 145.437,
      "start": 137.45690286759998,
      "end": 137.693203044825,
      "kind": "mountains_empty"
    },
    {
      "id": 51,
      "sourceStart": 145.437,
      "sourceEnd": 148.649,
      "start": 137.693203044825,
      "end": 140.72910532175,
      "kind": "signs"
    },
    {
      "id": 52,
      "sourceStart": 148.649,
      "sourceEnd": 151.318,
      "start": 140.72910532175,
      "end": 143.153407139975,
      "kind": "mirror"
    },
    {
      "id": 53,
      "sourceStart": 151.318,
      "sourceEnd": 151.693,
      "start": 143.153407139975,
      "end": 143.4941073955,
      "kind": "mirror"
    },
    {
      "id": 54,
      "sourceStart": 151.693,
      "sourceEnd": 152.069,
      "start": 143.4941073955,
      "end": 143.835607651625,
      "kind": "mirror_dark"
    },
    {
      "id": 55,
      "sourceStart": 152.069,
      "sourceEnd": 152.444,
      "start": 143.835607651625,
      "end": 144.176207907075,
      "kind": "mirror_dark"
    },
    {
      "id": 56,
      "sourceStart": 152.444,
      "sourceEnd": 152.819,
      "start": 144.176207907075,
      "end": 144.516808162525,
      "kind": "mirror_dark"
    },
    {
      "id": 57,
      "sourceStart": 152.819,
      "sourceEnd": 153.946,
      "start": 144.516808162525,
      "end": 145.54050893030004,
      "kind": "mirror_dark"
    },
    {
      "id": 58,
      "sourceStart": 153.946,
      "sourceEnd": 154.279,
      "start": 145.54050893030004,
      "end": 145.84300915717503,
      "kind": "mirror_dark"
    },
    {
      "id": 59,
      "sourceStart": 154.279,
      "sourceEnd": 154.78,
      "start": 145.84300915717503,
      "end": 146.29810949850003,
      "kind": "bulb_macro"
    },
    {
      "id": 60,
      "sourceStart": 154.78,
      "sourceEnd": 159.618,
      "start": 146.29810949850003,
      "end": 150.692612794375,
      "kind": "crowd"
    },
    {
      "id": 61,
      "sourceStart": 159.618,
      "sourceEnd": 159.952,
      "start": 150.692612794375,
      "end": 150.99601302192502,
      "kind": "mirror_dark"
    },
    {
      "id": 62,
      "sourceStart": 159.952,
      "sourceEnd": 160.953,
      "start": 150.99601302192502,
      "end": 151.905213703825,
      "kind": "mirror_dark"
    },
    {
      "id": 63,
      "sourceStart": 160.953,
      "sourceEnd": 161.328,
      "start": 151.905213703825,
      "end": 152.24581395927498,
      "kind": "mirror_flans"
    },
    {
      "id": 64,
      "sourceStart": 161.328,
      "sourceEnd": 161.578,
      "start": 152.24581395927498,
      "end": 152.47291412960004,
      "kind": "mirror_dark"
    },
    {
      "id": 65,
      "sourceStart": 161.578,
      "sourceEnd": 162.079,
      "start": 152.47291412960004,
      "end": 152.92801447092498,
      "kind": "mirror_dark"
    },
    {
      "id": 66,
      "sourceStart": 162.079,
      "sourceEnd": 163.747,
      "start": 152.92801447092498,
      "end": 154.44311560725,
      "kind": "mirror_dark"
    },
    {
      "id": 67,
      "sourceStart": 163.747,
      "sourceEnd": 169.419,
      "start": 154.44311560725,
      "end": 160.043619807625,
      "kind": "hands"
    },
    {
      "id": 68,
      "sourceStart": 169.419,
      "sourceEnd": 172.506,
      "start": 160.043619807625,
      "end": 163.0917220937,
      "kind": "balcony_upper"
    },
    {
      "id": 69,
      "sourceStart": 172.506,
      "sourceEnd": 174.174,
      "start": 163.0917220937,
      "end": 164.73872332895,
      "kind": "desert"
    },
    {
      "id": 70,
      "sourceStart": 174.174,
      "sourceEnd": 177.636,
      "start": 164.73872332895,
      "end": 168.15712589275003,
      "kind": "balcony_close"
    },
    {
      "id": 71,
      "sourceStart": 177.636,
      "sourceEnd": 183.725,
      "start": 168.15712589275003,
      "end": 173.68533003890002,
      "kind": "guitar_crowd"
    },
    {
      "id": 72,
      "sourceStart": 183.725,
      "sourceEnd": 188.438,
      "start": 173.68533003890002,
      "end": 177.964233248075,
      "kind": "room_duo"
    },
    {
      "id": 73,
      "sourceStart": 188.438,
      "sourceEnd": 191.066,
      "start": 177.964233248075,
      "end": 180.47655847500005,
      "kind": "room_duo_wide"
    },
    {
      "id": 74,
      "sourceStart": 191.066,
      "sourceEnd": 196.181,
      "start": 180.47655847500005,
      "end": 184,
      "kind": "filament"
    }
  ]
};
  const track=api.tracks?.[0];
  let midiTime=0;
  const headFactory=()=>{const h=api.createStockHead(),update=h.update;h.update=(t,o)=>update(midiTime,o,track?.message(track.indexAt(midiTime)));return h;};
  const response=await fetch(api.base+'opening.js');if(!response.ok)throw new Error('Opening scene missing');
  const url=URL.createObjectURL(new Blob([await response.text()],{type:'text/javascript'}));
  const module=await import(url);URL.revokeObjectURL(url);
  const opening=module.createStage(T,renderer,{createStockHead:headFactory});
  const scene=new T.Scene();scene.background=new T.Color(0x020304);
  const camera=new T.PerspectiveCamera(42,4/3,.02,150);
  renderer.outputColorSpace=T.LinearSRGBColorSpace;
  // A small GPU glow pass keeps lamps and the stock line head luminous.
  const target=new T.WebGLRenderTarget(960,720,{depthBuffer:true});
  const postScene=new T.Scene(),postCamera=new T.OrthographicCamera(-1,1,1,-1,0,1);
  const postMat=new T.ShaderMaterial({uniforms:{source:{value:target.texture},time:{value:0},fade:{value:1}},vertexShader:`varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`precision highp float;uniform sampler2D source;uniform float time;uniform float fade;varying vec2 v;
  void main(){vec3 c=texture2D(source,v).rgb;vec3 glow=vec3(0.);for(int x=-2;x<=2;x++){for(int y=-2;y<=2;y++){vec3 a=texture2D(source,v+vec2(float(x),float(y))*vec2(3./960.,3./720.)).rgb;glow+=max(a-vec3(.20),vec3(0.))/25.;}}
  float vig=1.-.18*dot((v-.5)*1.4,(v-.5)*1.4);float noise=(fract(sin(dot(v+time,vec2(12.9898,78.233)))*43758.5453)-.5)*.003;
  gl_FragColor=vec4(max(vec3(0.),(c+glow*.58)*vig+noise)*fade,1.);}`});
  postScene.add(new T.Mesh(new T.PlaneGeometry(2,2),postMat));
  function finish(t){renderer.setRenderTarget(null);postMat.uniforms.time.value=t;postMat.uniforms.fade.value=t>182.8?Math.max(0,(184-t)/1.2):1;renderer.render(postScene,postCamera);}
  const sets={};const root=name=>{const g=new T.Group();scene.add(g);sets[name]=g;return g;};
  const M=(color,roughness=.7)=>new T.MeshStandardMaterial({color,roughness});
  const B=(color)=>new T.MeshBasicMaterial({color});
  const stone=M(0x6f6254),edge=M(0x9a8265),dark=M(0x080d17),white=M(0xbdb8ac),gold=M(0xb78c34,.28),red=M(0x541c24),wood=M(0x372215),black=M(0x060709),blue=M(0x121f3b),skin=M(0xa98f77);
  const mesh=(g,geo,m,x=0,y=0,z=0)=>{const o=new T.Mesh(geo,m);o.position.set(x,y,z);g.add(o);return o;};
  const box=(g,w,h,d,m,x=0,y=0,z=0)=>mesh(g,new T.BoxGeometry(w,h,d),m,x,y,z);
  const ball=(g,x,y,z,sx,sy,sz,m)=>{const o=mesh(g,new T.SphereGeometry(1,16,12),m,x,y,z);o.scale.set(sx,sy,sz);return o;};
  const tube=(g,pts,r,m,segments=32)=>mesh(g,new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p))),segments,r,6,false),m);
  const cylinder=(g,r1,r2,h,m,x=0,y=0,z=0)=>mesh(g,new T.CylinderGeometry(r1,r2,h,20),m,x,y,z);
  const torus=(g,r,t,m,x=0,y=0,z=0)=>mesh(g,new T.TorusGeometry(r,t,8,40),m,x,y,z);
  const ambient=new T.AmbientLight(0xaeb3c3,1.7);scene.add(ambient);
  const key=new T.PointLight(0xffd9af,160,45,2);key.position.set(-4,6,6);scene.add(key);
  const fill=new T.PointLight(0x8da8db,85,35,2);fill.position.set(5,3,5);scene.add(fill);
  const rim=new T.PointLight(0xffb865,95,35,2);rim.position.set(0,5,-5);scene.add(rim);
  function hair(head,flans=false) {
    const g=new T.Group();head.group.add(g);const m=B(flans?0x28221c:0x704b31);
    for(let side of [-1,1])for(let i=0;i<12;i++){let k=i/11;
      tube(g,[[7,13.2,-.6],[8,12.8+(flans?1:0),side*(2+k*2)],[8-k*3,10.5,side*(5.3+k)],[4-k*3,flans?9:6.4,side*(6+k*.6)]],.38,m,16);
    }
    if(flans){for(let side of [-1,1]){const lens=torus(g,2,.19,B(0x756f63),10,4.7,side*3);lens.rotation.y=Math.PI/2;}tube(g,[[10,5,1],[10,5,-1]],.18,B(0x756f63));}
    return g;
  }
  function actor(flans=false,staticHead=null) {
    const g=new T.Group();const torso=ball(g,0,1.23,0,.39,.58,.23,flans?black:blue);
    if(flans){box(g,.18,.55,.04,white,0,1.55,.22);const tie=box(g,.05,.4,.05,red,0,1.48,.25);tie.rotation.z=.07;}
    cylinder(g,.12,.14,.26,black,0,1.82,0);
    const h=staticHead?null:headFactory();const hg=staticHead?staticHead.clone(true):h.group;
    g.add(hg);hg.position.set(0,2.15,0);hg.scale.setScalar(.034);if(h)hair(h,flans);
    const arms=[];for(const s of [-1,1]){const a=new T.Group();g.add(a);a.position.set(s*.36,1.6,0);cylinder(a,.10,.085,.72,flans?black:blue,0,-.32,0);ball(a,0,-.72,0,.095,.12,.08,skin);arms.push(a);}
    const legs=[];for(const s of [-1,1]){const l=new T.Group();g.add(l);l.position.set(s*.18,.91,0);cylinder(l,.14,.11,.81,dark,0,-.39,0);ball(l,0,-.81,.1,.14,.09,.25,black);legs.push(l);}
    return {g,h,arms,legs,head:hg,pose(t,mode='sing'){
      if(h)h.update(t,.3);hg.rotation.y=-Math.PI/2+.14*Math.sin(t*1.6);
      const b=t*105/60*Math.PI*2;g.position.y=.025*Math.sin(b);
      for(let i=0;i<2;i++) {arms[i].rotation.z=(i?1:-1)*(.14+.1*Math.sin(b));arms[i].rotation.x=.1*Math.cos(b+i);
        legs[i].rotation.x=.035*Math.sin(b+i*Math.PI);}
      if(mode==='dance'){arms.forEach((a,i)=>{a.rotation.z=(i?1:-1)*(1.1+.7*Math.sin(b*.5));a.rotation.x=-.5+.4*Math.sin(b*.5+i);});g.rotation.y=.25*Math.sin(b*.5);}
      if(mode==='guitar'){arms[0].rotation.z=-1.2;arms[0].rotation.x=-.5;arms[1].rotation.x=-.9+.15*Math.sin(b*2);arms[1].rotation.z=.25;}
      if(mode==='seated'){legs.forEach(l=>l.rotation.x=-Math.PI/2.6);arms.forEach((a,i)=>{a.rotation.z=(i?1:-1)*.6;a.rotation.x=-.55;});}
      if(mode==='hands'){arms.forEach((a,i)=>{a.rotation.z=(i?1:-1)*2.3;a.rotation.x=-.7;});}
    }};
  }
  const singer=actor(false),guitarist=actor(true);
  const proto=api.createStockHead();proto.update(0,.05);hair(proto,false);
  function plaque(g,text,w,h,x,y,z){
    const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d');ctx.fillStyle='#d6d2b7';ctx.fillRect(0,0,256,256);ctx.fillStyle='#161719';ctx.textAlign='center';ctx.font='bold 44px sans-serif';text.split('\n').forEach((s,i)=>ctx.fillText(s,128,60+i*55));
    const tex=new T.CanvasTexture(c);const o=mesh(g,new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:tex}),x,y,z);return o;
  }
  function eyes(g,w=.6,h=.22){
    box(g,w,h,.025,B(0xb5b3a9),0,0,0);
    for(let s of [-1,1]){ball(g,s*w*.23,0,.018,w*.20,h*.30,.018,B(0x454744));ball(g,s*w*.23,0,.038,h*.19,h*.22,.012,B(0xc2c6bf));ball(g,s*w*.23,0,.052,h*.09,h*.14,.01,B(0x090b0c));}
  }
  const crowd=[];
  function dancer(i){const a=actor(false,proto.group);const plaid=M(i%2?0x773d36:0x66362b);const shirt=box(a.g,.73,.75,.48,plaid,0,1.36,0);
    for(let j=-3;j<=3;j++){box(shirt,.018,.75,.006,white,j*.10,0,.243);box(shirt,.73,.018,.006,white,0,j*.10,.244);}
    const mask=new T.Group();a.g.add(mask);mask.position.set(0,2.28,.30);eyes(mask);a.mask=mask;crowd.push(a);return a;}
  function lamp(g,x,y,z,height=1.7){const l=new T.Group();g.add(l);l.position.set(x,y,z);cylinder(l,.11,.14,height*.7,gold,0,height*.35,0);ball(l,0,.16,0,.23,.16,.23,gold);
    const shade=cylinder(l,.25,.43,.48,M(0xc7a066),0,height-.08,0);const glow=ball(l,0,height-.22,0,.25,.12,.25,B(0xf1b95e));
    return l;
  }
  function chair(g,x,z,angle=0){const c=new T.Group();g.add(c);c.position.set(x,0,z);c.rotation.y=angle;
    box(c,1.35,.30,1.05,red,0,.65,0);box(c,1.35,1.2,.3,red,0,1.3,-.45);for(let s of [-1,1]){ball(c,s*.68,1.03,0,.18,.24,.62,red);box(c,.11,.6,.1,wood,s*.48,.3,.32);box(c,.11,.6,.1,wood,s*.48,.3,-.38);}return c;}
  function plant(g,x,z){const p=new T.Group();g.add(p);p.position.set(x,0,z);cylinder(p,.3,.23,.5,M(0x44352a),0,.25,0);for(let i=0;i<12;i++){const a=i*2.4,r=.4+i*.025;const pts=[[0,.4,0],[Math.cos(a)*r,1.7+i%3*.2,Math.sin(a)*r],[Math.cos(a)*r*1.8,1.45+i%4*.12,Math.sin(a)*r*1.8]];tube(p,pts,.025,M(0x283c27));const leaf=ball(p,pts[1][0],pts[1][1],pts[1][2],.12,.6,.025,M(0x263d29));leaf.rotation.z=-a;}return p;}
  function guitar(g){const a=new T.Group();g.add(a);a.position.set(0,1.15,.35);a.rotation.z=-.55;
    ball(a,-.16,0,0,.34,.40,.10,M(0x6d3923));ball(a,.1,.3,0,.24,.29,.10,M(0x824a2c));box(a,.14,1.1,.08,wood,.1,.95,0);box(a,.24,.28,.10,wood,.1,1.55,0);
    ball(a,-.04,.15,.10,.13,.16,.02,B(0x101313));for(let j=0;j<6;j++)tube(a,[[.06+j*.016,-.22,.12],[.06+j*.016,1.63,.12]],.003,B(0xc5bca1),2);return a;}
  const instrument=guitar(guitarist.g);
  // Dance poses sampled on the source-video clock, mapped by each shot's existing timeline.
  // Keep the stock head; give the two performers elbows, fingers and a hip pivot.
  function danceRig(a){
    const pivot=new T.Group(),limbs=new T.Group();pivot.add(limbs);pivot.position.y=.9;
    const sleeves=a===guitarist?black:blue;
    const hands=[];
    for(const side of [-1,1]){
      const upper=mesh(limbs,new T.CylinderGeometry(.10,.085,1,10),sleeves),fore=mesh(limbs,new T.CylinderGeometry(.085,.065,1,10),sleeves);
      const hand=new T.Group();limbs.add(hand);ball(hand,0,0,0,.10,.13,.045,skin);
      for(let j=0;j<4;j++){const finger=new T.Group();hand.add(finger);finger.position.set((j-1.5)*.052,.08,0);finger.rotation.z=(1.5-j)*.15;const len=j===0||j===3?.11:.14;rod(finger,[0,0,0],[0,len,.025],.021,skin);rod(finger,[0,len,.025],[0,len+.065,.07],.018,skin);}
      rod(hand,[side*.07,0,0],[side*.15,.07,.04],.028,skin);
      hands.push({side,upper,fore,hand});
    }
    let moved=[];
    function reset(){for(const o of moved){a.g.add(o);o.position.y+=.9;}moved=[];pivot.removeFromParent();a.arms.forEach(x=>x.visible=true);}
    function segment(o,p,q){const v=new T.Vector3(...p),d=new T.Vector3(...q).sub(v);o.position.copy(v).addScaledVector(d,.5);o.position.y-=.9;o.scale.y=d.length();o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());}
    function pose(wrists,elbows,lean,twist,roll=0){
      moved=a.g.children.filter(o=>!a.legs.includes(o)&&o!==seatedLegs);for(const o of moved){pivot.add(o);o.position.y-=.9;}
      a.g.add(pivot);a.arms.forEach(x=>x.visible=false);pivot.rotation.set(lean,twist,roll);
      hands.forEach(({side,upper,fore,hand},i)=>{segment(upper,[side*.36,1.6,0],elbows[i]);segment(fore,elbows[i],wrists[i]);hand.position.set(wrists[i][0],wrists[i][1]-.9,wrists[i][2]);hand.rotation.set(-.30,side*.65,side*.25);});
    }
    return {reset,pose,hands};
  }
  const danceRigs=[danceRig(singer),danceRig(guitarist)];
  const mix=(a,b,u)=>a+(b-a)*u;
  function keyPose(keys,clock){let j=0;while(j<keys.length-2&&clock>keys[j+1][0])j++;const a=keys[j],b=keys[j+1],u=T.MathUtils.clamp((clock-a[0])/(b[0]-a[0]),0,1),e=u*u*(3-2*u);return a.slice(1).map((v,i)=>mix(v,b[i+1],e));}
  function dance(a,ref,kind,id){
    const rig=danceRigs[a===singer?0:1],side=a===singer?-1:1;
    let wrists,elbows,lean=0,twist=0,roll=0;
    if(kind==='city'&&id===5){
      const beat=(ref-23.023)*Math.PI*2/1.05+(a===singer?.30:0),dip=(1-Math.cos(beat))*.5;
      const reach=.78+.12*Math.sin(beat),height=1.74-.16*dip;
      wrists=[[-.23,height,reach],[.23,height,reach]];elbows=[[-.48,1.30-.1*dip,.30],[.48,1.30-.1*dip,.30]];
      lean=.08+.14*dip;twist=.14*Math.sin(beat*.5);a.g.position.y-=.16*dip;
    }else if(kind==='city'){
      const beat=(ref-67.067)*Math.PI*2/1.05;
      wrists=[[-.33,2.48+.08*Math.sin(beat),.18],[.33,2.48-.08*Math.sin(beat),.18]];elbows=[[-.49,2.02,.20],[.49,2.02,.20]];
      lean=-.08;roll=.06*Math.sin(beat);a.g.position.y+=.055*Math.max(0,Math.sin(beat));
    }else if(kind.startsWith('mountains')){
      // The second reprise repeats the first sweep and then drops out of the frame.
      const c=ref<143.5?ref:140.432+(ref-143.518);
      const [lift,turn,bow]=keyPose([[140.432,.5,0,0],[140.75,1,.4,0],[141.15,1,.9,0],[141.50,.6,1.5,0],[141.85,.1,1.9,.7],[142.392,0,2.1,1.1]],c);
      wrists=[[-.25,1.0+.1*lift,.35],[.22,1.45+1.05*lift,.18]];elbows=[[-.43,1.25,.15],[.47,1.5+.55*lift,.08]];
      twist=turn*(a===singer?1:.85);lean=bow;roll=-.10*lift;a.g.position.y-=bow*.14;
    }else{
      const c=ref-183.725;
      const [lift,bow,turn]=keyPose([[0,.5,.45,-.4],[.55,1,-.2,.3],[1.05,.65,-.3,.5],[1.55,1,-.15,.2],[2.05,.15,1.15,-.15],[2.6,.7,.1,-.45],[3.1,.2,1.0,.1],[3.65,.5,.15,.4],[4.15,.15,1.15,-.2],[4.7,.2,.3,.2],[5.25,.9,-.1,-.4],[5.8,.2,.45,.1],[6.4,.7,.1,.4],[7.35,.1,.6,0]],c);
      if(a===singer){wrists=[[-.35-.3*lift,1.1+1.3*lift,.3],[.3+.2*lift,1.1+.7*lift,.4]];elbows=[[-.55,1.3+.5*lift,.05],[.55,1.35+.3*lift,.1]];lean=bow;twist=turn;roll=.12*Math.sin(c*3);}
      else {wrists=[[-.13,1.20+.08*Math.sin(c*22),.5],[.55,1.9,.42]];elbows=[[-.5,1.35,.1],[.45,1.55,.1]];lean=.12+.25*Math.sin(c*4);twist=-turn*.5;roll=.12*Math.sin(c*2);}
      a.g.position.x+=.15*Math.sin(c*3+side);a.legs.forEach((l,i)=>l.rotation.x=.14*Math.sin(c*5+i*Math.PI));
    }
    rig.pose(wrists,elbows,lean,twist,roll);
    if(kind==='city'&&id===5)rig.hands.forEach(({side,hand})=>hand.rotation.set(-.25,side*.85,side*.9));
  }
  function balcony(g,y=3,z=-6){const rail=new T.Group();g.add(rail);rail.position.set(0,y,z);
    for(let i=-7;i<=7;i++){const x=i*.7;cylinder(rail,.11,.14,1.1,stone,x,.55,0);ball(rail,x,.27,0,.2,.2,.2,stone);box(rail,.42,.12,.4,edge,x,1.1,0);}
    box(rail,11,.18,.55,edge,0,1.24,0);return rail;}
  const hall=root('hall');
  for(let x=-10;x<=10;x++)for(let z=-12;z<=7;z++)box(hall,1,.08,1,((x+z)&1)?M(0x77736e):M(0x8b867b),x,-.1,z);
  box(hall,23,11,.5,stone,0,5,-12);box(hall,.5,11,25,stone,-11,5,-1);box(hall,.5,11,25,stone,11,5,-1);
  for(const x of [-8,-4,4,8]) {cylinder(hall,.46,.55,8,stone,x,4,-8);box(hall,1.4,.4,1.4,edge,x,7.7,-8);box(hall,1.2,.3,1.2,edge,x,.15,-8);}
  for(let side of [-1,1])for(let j=0;j<18;j++){box(hall,3,.2+j*.2,.55,stone,side*6,.1+j*.1,-4-j*.5);box(hall,.12,.9,.12,edge,side*4.55,.8+j*.2,-4-j*.5);}
  balcony(hall,3.6,-10);
  for(let x of [-8,-4,0,4,8]){const arc=[];for(let i=0;i<=40;i++){let a=i/40*Math.PI;arc.push([x+Math.cos(a)*1.8,5+Math.sin(a)*2,-11.65]);}tube(hall,arc,.16,edge);box(hall,2.8,3,.04,M(0x16202a),x,3.5,-11.7);}
  for(let x of [-9,9])for(let z of [-7,-1,5]){cylinder(hall,.08,.12,3.1,gold,x,1.55,z);for(let k=-1;k<=1;k++)ball(hall,x+k*.25,3.15-Math.abs(k)*.12,z,.18,.24,.18,B(0xe5c28e));}
  const hallFurniture=new T.Group();hall.add(hallFurniture);
  chair(hallFurniture,-3,1,.3);chair(hallFurniture,3,-2,-.35);chair(hallFurniture,-5,-4,.3);
  lamp(hallFurniture,-4,0,1,2.2);lamp(hallFurniture,2,0,-1,2.2);plant(hallFurniture,-7,-1);plant(hallFurniture,6,-5);
  for(let i=0;i<14;i++){const a=dancer(i);hall.add(a.g);a.g.position.set((i%5-2)*1.45,0,-2-Math.floor(i/5)*2);a.home=a.g.position.clone();}
  // Cyclists follow a shared continuous clock across the hall's intercut shots.
  const cycleSalon=new T.Group();hall.add(cycleSalon);
  box(cycleSalon,6.3,.025,5.3,M(0x675747),0,-.045,-.7);
  for(let x of [-3.02,3.02])box(cycleSalon,.07,.03,5.1,M(0xaa8870),x,-.025,-.7);
  const cycleChair=chair(cycleSalon,.65,-.1,-.12);
  chair(cycleSalon,-2.15,-.9,.75);
  for(const [x,z] of [[-2.5,.7],[2,-1.5]]){box(cycleSalon,.7,.75,.65,wood,x,.38,z);lamp(cycleSalon,x,.77,z,1.2);}
  for(const x of [-2.8,2.8]){box(cycleSalon,.12,1.25,2.1,M(0x423b32),x,.63,-1.95);plant(cycleSalon,x,-2.8);}
  box(cycleSalon,1.6,1.45,.22,wood,0,.73,-2.9);
  for(let j=0;j<6;j++)box(cycleSalon,.16,.75,.04,M([0x786345,0x4f3832,0x3e4950][j%3]),-.6+j*.23,1.04,-2.76);
  const seatedLegs=new T.Group();singer.g.add(seatedLegs);
  const bicycles=[];
  function rod(g,a,b,r,m){const v=new T.Vector3(...a),w=new T.Vector3(...b),d=w.clone().sub(v);const o=mesh(g,new T.CylinderGeometry(r,r,d.length(),8),m);o.position.copy(v).add(w).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return o;}
  for(const x of [-.18,.18]){rod(seatedLegs,[x,.91,0],[x,.72,.58],.12,dark);rod(seatedLegs,[x,.72,.58],[x,.32,.61],.10,dark);ball(seatedLegs,x,.28,.73,.14,.09,.24,black);}
  for(let i=0;i<8;i++){
    const g=new T.Group();hall.add(g);
    const steel=M(i%3===0?0x777c79:0x303b3b,.28),tire=M(0x131719),chrome=M(0xaaa79a,.24);
    const wheels=[];
    for(const x of [-.82,.82]){const wheel=new T.Group();g.add(wheel);wheel.position.set(x,.56,0);torus(wheel,.53,.035,tire);torus(wheel,.485,.012,chrome);
      for(let j=0;j<16;j++){const a=j*Math.PI/8;rod(wheel,[0,0,0],[Math.cos(a)*.48,Math.sin(a)*.48,0],.005,chrome);}wheels.push(wheel);}
    const rear=[-.82,.56,0],crank=[-.12,.48,0],seat=[-.3,1.18,0],fork=[.57,1.18,0],front=[.82,.56,0];
    for(const [a,b] of [[rear,crank],[crank,seat],[seat,rear],[seat,fork],[fork,crank],[fork,front]])rod(g,a,b,.025,steel);
    rod(g,seat,[-.32,1.32,0],.028,chrome);ball(g,-.36,1.33,0,.21,.055,.12,black);
    rod(g,fork,[.54,1.49,0],.025,chrome);rod(g,[.54,1.49,-.36],[.54,1.49,.36],.023,chrome);
    for(const z of [-.36,.36])rod(g,[.54,1.49,z],[.73,1.40,z],.025,black);
    const rider=new T.Group();g.add(rider);
    const plaid=M([0x843b2e,0x773c30,0x924c35,0x6b3430][i%4]);
    const shirt=box(rider,.46,.63,.65,plaid,-.04,1.72,0);shirt.rotation.z=-.22;
    for(const x of [-.235,.235]){for(let j=-2;j<=2;j++){box(shirt,.008,.018,.65,white,x,j*.12,0);box(shirt,.008,.63,.014,white,x,0,j*.12);}}
    for(const z of [-.33,.33]){for(let j=-2;j<=2;j++){box(shirt,.46,.018,.008,white,0,j*.12,z);box(shirt,.014,.63,.008,white,j*.09,0,z);}}
    const head=proto.group.clone(true);rider.add(head);head.position.set(.12,2.14,0);head.rotation.y=0;head.scale.setScalar(.029);
    for(const z of [-.29,.29]){rod(rider,[.06,1.94,z],[.32,1.62,z],.085,plaid);rod(rider,[.32,1.62,z],[.68,1.41,z],.065,skin);ball(rider,.68,1.41,z,.09,.07,.07,skin);}
    const moving=new T.Group();g.add(moving);const legMat=M(0x182b42);
    const legs=[];for(const side of [-1,1]){const upper=mesh(moving,new T.CylinderGeometry(.105,.09,1,8),legMat),lower=mesh(moving,new T.CylinderGeometry(.085,.065,1,8),legMat);const shoe=ball(moving,0,0,0,.19,.075,.09,black);const pedal=box(moving,.19,.035,.14,chrome);legs.push({side,upper,lower,shoe,pedal});}
    const shadow=mesh(g,new T.CircleGeometry(1,32),new T.MeshBasicMaterial({color:0x070706,transparent:true,opacity:.20,depthWrite:false}),0,-.045,0);shadow.rotation.x=-Math.PI/2;shadow.scale.set(1.45,.45,1);
    function segment(o,a,b){const v=new T.Vector3(...a),w=new T.Vector3(...b),d=w.clone().sub(v);o.position.copy(v).add(w).multiplyScalar(.5);o.scale.y=d.length();o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());}
    bicycles.push({g,animate(t){const phase=(t-50.66)*.32+i*Math.PI/4;const rx=5.1+(i%2)*.3,rz=4.25+(i%2)*.2;
      g.position.set(rx*Math.cos(phase),0,-.7+rz*Math.sin(phase));g.rotation.y=Math.atan2(-rz*Math.cos(phase),-rx*Math.sin(phase));
      wheels.forEach(w=>w.rotation.z=-t*3.05);const spin=t*3.05+i;
      legs.forEach(({side,upper,lower,shoe,pedal})=>{const a=spin+(side>0?Math.PI:0),foot=[-.12+.20*Math.cos(a),.48+.20*Math.sin(a),side*.19],knee=[.30+.09*Math.cos(a),.94+.09*Math.sin(a),side*.22];segment(upper,[-.31,1.29,side*.21],knee);segment(lower,knee,foot);shoe.position.set(foot[0]+.06,foot[1]+.055,foot[2]);pedal.position.set(...foot);});
    }});
  }
  const eyeBoards=[],signBoards=[];
  crowd.forEach((a,i)=>{if(i<7){const board=new T.Group();a.g.add(board);board.position.set(0,.95,.5);box(board,.9,1.2,.07,black);const eye=new T.Group();board.add(eye);eye.position.z=.06;eyes(eye,.78,.8);eyeBoards.push(board);
    const sign=new T.Group();a.g.add(sign);sign.position.set(0,1.05,.51);box(sign,.95,1.3,.08,wood);plaque(sign,'STOP\nROCK\nVIDEO',.86,1.18,0,0,.05);signBoards.push(sign);}});
  const room=root('room');box(room,14,.1,13,M(0x211a19),0,-.12,0);box(room,14,7,.3,M(0x071010),0,3,-5);
  for(let i=0;i<4;i++){chair(room,-3+i*2,-1-i%2, i%2?.2:-.2);lamp(room,-3.8+i*2,0,-.8-i%2,2.1);plant(room,-5+i*3,-4);}
  const mainChair=chair(room,0,1,0);lamp(room,-1.5,0,1,1.9);box(room,.65,.06,.65,wood,-1.5,.7,1);plant(room,2,0);
  const helmet=new T.Group();room.add(helmet);helmet.position.set(0,2.2,1);
  ball(helmet,0,0,0,.40,.49,.22,M(0x69727c,.38));box(helmet,.53,.20,.05,black,0,.10,.24);box(helmet,.38,.10,.02,M(0x31383a),0,.10,.28);
  const funnel=new T.Group();room.add(funnel);funnel.position.set(0,1.1,1.4);const cone=cylinder(funnel,.35,.065,.45,M(0x242b2d));cone.rotation.x=Math.PI/2;
  const toolRig=new T.Group();room.add(toolRig);toolRig.position.set(0,1.1,1.5);
  torus(toolRig,.65,.035,edge);for(let i=0;i<3;i++){let a=i*2.094;tube(toolRig,[[0,0,0],[Math.cos(a)*.65,Math.sin(a)*.65,0]],.025,edge);}cylinder(toolRig,.10,.16,.5,M(0x6e7170),0,.1,-.1);
  const torch=new T.Group();room.add(torch);torch.position.set(-.5,1.5,1.65);tube(torch,[[-.5,0,0],[.1,0,0],[.28,.12,0]],.04,gold);const flame=mesh(torch,new T.ConeGeometry(.045,.4,12),B(0x528fd6),.45,.12,0);flame.rotation.z=-Math.PI/2;
  // Mirror tunnel, built as nested illuminated frames, never a video surface.
  const mirror=root('mirror');box(mirror,16,10,.2,B(0x020305),0,3,-6);
  const mirrorLights=[];
  for(let depth=0;depth<5;depth++){const z=-depth*1.4-.7,w=1.8,h=3.2;for(let s of [-1,1]){box(mirror,.10,h,.09,M(0x60666c),s*w/2,1.7,z);for(let i=0;i<11;i++){const m=B(i%2?0xd28b4c:0xe6b785);mirrorLights.push(m);ball(mirror,s*(w/2-.13),.25+i*.28,z+.08,.045,.055,.035,m);}}box(mirror,w,.10,.09,edge,0,3.3,z);for(let i=0;i<7;i++)ball(mirror,-.7+i*.23,3.16,z,.05,.04,.03,B(0xf4b769));}
  for(let s of [-1,1])for(let i=0;i<10;i++)box(mirror,.40,.07,.05,B(0xcead92),s*1.25,.25+i*.35,-.5);
  // City / painted theatrical backdrops reconstructed from simple geometry.
  const city=root('city');box(city,30,18,.1,B(0x738995),0,7,-6);
  const buildingM=[M(0xc6c0a1),M(0xadaf9d),M(0x898a84)];
  for(let i=0;i<15;i++){const x=-10+i*1.45,h=3+(i*7%9)*.6;box(city,1.1,h,.55,buildingM[i%3],x,h/2,-4.5+(i%3)*.12);
    for(let y=.2;y<h-.2;y+=.32)for(let a=-1;a<=1;a++)box(city,.12,.16,.015,B(0x555f64),x+a*.25,y,-4.16+(i%3)*.12);}
  box(city,30,.1,12,M(0x79737b),0,-.1,0);
  const mountains=root('mountains');box(mountains,24,13,.1,B(0x8da8b1),0,5,-7);box(mountains,25,.1,12,M(0x586447),0,-.1,-1);
  for(let i=0;i<10;i++){const h=3+(i*3%5)*.5;const mt=mesh(mountains,new T.ConeGeometry(2,h,5),M(i%2?0x8b8286:0x717b87),-9+i*2,h/2,-5);mt.rotation.y=i*.7;}
  for(let i=0;i<20;i++){const x=(i*3.13%18)-9,z=-2-(i%3);cylinder(mountains,.05,.1,2.2,wood,x,1.1,z);for(let j=0;j<3;j++)mesh(mountains,new T.ConeGeometry(.4-j*.08,.8,7),M(0x344b39),x,1.2+j*.5,z);}
  const desert=root('desert');box(desert,25,14,.1,B(0x74929c),0,6,-6);box(desert,15,5,.3,M(0x9d5e48),0,2,-4);box(desert,20,.1,12,M(0xb19b70),0,-.1,0);for(let x of [-5,5]){cylinder(desert,.08,.14,6,wood,x,3,-3);for(let i=0;i<8;i++){const a=i*Math.PI/4;tube(desert,[[x,6,-3],[x+Math.cos(a),6.2,-3+Math.sin(a)],[x+Math.cos(a)*1.8,5.6,-3+Math.sin(a)*1.8]],.09,M(0x40513c));}}
  const bulbsSet=root('bulbs');const glowing=[];
  for(let i=0;i<11;i++){const b=new T.Group();bulbsSet.add(b);b.position.set((i-5)*.9,Math.sin(i*2)*.25,Math.cos(i)*.8);const color=[0xe8b85e,0xffd897,0xd7be83,0xeb8a20][i%4];
    const m=B(color);const o=ball(b,0,0,0,.25,.38+i%3*.08,.25,m);cylinder(b,.12,.14,.24,gold,0,-.43,0);if(i%3===0)o.material=new T.MeshBasicMaterial({color,wireframe:true});glowing.push(b);}
  const bridge=root('bridge');const bridgeBulbs=[];for(let i=0;i<5;i++){const o=glowing[i].clone(true);o.scale.setScalar(1.2);bridge.add(o);bridgeBulbs.push(o);}
  // Brass and hand close-ups.
  const brass=root('brass');const horn=new T.Group();brass.add(horn);horn.position.set(0,1.4,0);
  const bell=mesh(horn,new T.LatheGeometry([new T.Vector2(.06,-.8),new T.Vector2(.08,-.25),new T.Vector2(.19,.05),new T.Vector2(.52,.3),new T.Vector2(.57,.34)],40),gold);bell.rotation.x=Math.PI/2;
  torus(horn,.54,.035,gold,0,0,.34);tube(horn,[[0,0,-.8],[.3,-.4,-.9],[.6,-.3,-.5],[.3,.2,-.2]],.07,gold);
  const brassMaterial=new T.MeshStandardMaterial({color:0xe1bd62,emissive:0x8b5d1f,emissiveIntensity:.20,roughness:.28,metalness:.1,side:T.DoubleSide});
  horn.traverse(o=>{if(o.isMesh)o.material=brassMaterial;});
  const hands=root('hands');box(hands,5,.1,3,M(0x48536b),0,-.15,0);for(let s of [-1,1]){const h=new T.Group();hands.add(h);h.position.set(s*.8,.12,0);ball(h,0,0,0,.32,.12,.18,skin);for(let i=0;i<5;i++)tube(h,[[0,0,(i-2)*.07],[-s*.25,.04,(i-2)*.07],[-s*.4,.02,(i-2)*.09]],.045,skin);}
  let activeSet='',shotIndex=-1;
  function put(a,g,x=0,y=0,z=0){g.add(a.g);a.g.position.set(x,y,z);a.g.rotation.set(0,0,0);}
  function poseCam(pos,target,fov=42){camera.position.set(...pos);camera.lookAt(...target);camera.fov=fov;camera.updateProjectionMatrix();}
  function select(name){Object.entries(sets).forEach(([k,g])=>g.visible=k===name);activeSet=name;}
  const clamp=T.MathUtils.clamp;
  function render(t){
    renderer.setRenderTarget(target);
    midiTime=clamp(t,0,184);const s=timeline.shots.find(x=>t>=x.start&&t<x.end)??timeline.shots.at(-1);shotIndex=s.id;
    const u=clamp((t-s.start)/(s.end-s.start),0,1),ref=s.sourceStart+u*(s.sourceEnd-s.sourceStart),k=s.kind;
    // The approved opening keeps its composition and measured edit points, retimed to MIDI.
    if(s.id<4||k==='shoes'||k==='filament') {opening.render(k==='shoes'?19.269+u*.70:k==='filament'?(s.id===74?15.55-u*4.3:11.18+u*4.4):ref);finish(t);return;}
    danceRigs.forEach(r=>r.reset());
    singer.g.removeFromParent();guitarist.g.removeFromParent();singer.g.visible=true;guitarist.g.visible=true;
    singer.head.visible=true;guitarist.head.visible=true;for(const a of [singer,guitarist])a.head.traverse(o=>{if(o.isLineSegments2)o.visible=true;});instrument.visible=false;helmet.visible=false;toolRig.visible=false;torch.visible=false;funnel.visible=false;
    eyeBoards.forEach(o=>o.visible=k==='eyes');signBoards.forEach(o=>o.visible=k==='signs');const cycling=[21,23,24,26].includes(s.id);cycleSalon.visible=cycling;hallFurniture.visible=!cycling;bicycles.forEach(b=>{b.g.visible=cycling;if(cycling)b.animate(t);});
    crowd.forEach((a,i)=>{a.g.visible=true;a.g.position.copy(a.home);a.pose(t+i*.07,k==='crowd'||k==='crowd_close'?'hands':'dance');a.g.position.x=a.home.x+.12*Math.sin(t*2+i);});
    ambient.intensity=1.7;key.intensity=160;fill.intensity=85;rim.intensity=95;key.color.setHex(0xffd9af);scene.background.setHex(0x020304);
    const pulse=Math.sin(t*105/60*Math.PI*2);
    if(k.startsWith('mirror')){
      select('mirror');const fl=k.includes('flans')||k==='mirror_guitar';const a=fl?guitarist:singer;put(a,mirror,0,0,.1);a.pose(t,k==='mirror_guitar'?'guitar':'sing');instrument.visible=k==='mirror_guitar';
      poseCam([.15*Math.sin(t),2.10,k==='mirror_guitar'?3.6:2.25-u*.15],[0,2.05,0],k==='mirror_guitar'?47:36);
      ambient.intensity=k==='mirror_dark'?.15:.65;key.intensity=k==='mirror_dark'?3:40;fill.intensity=k==='mirror_dark'?0:25;rim.intensity=4;
      if(k==='mirror_red')key.color.setHex(0xff2515);mirrorLights.forEach((m,i)=>m.color.setHex(i%3?0xe2ab77:0x8d2b13));
      if(k==='mirror_dark'){a.head.traverse(o=>{if(o.isLineSegments2)o.visible=(s.id%3!==0);});}else a.head.traverse(o=>{if(o.isLineSegments2)o.visible=true;});
    }else if(['city','mountains','mountains_close','mountains_empty','desert','pipe'].includes(k)){
      const name=k==='city'?'city':k==='desert'?'desert':'mountains';select(name);const g=sets[name];put(singer,g,-.8,0,.2);put(guitarist,g,.8,0,-.15);singer.pose(t,'dance');guitarist.pose(t,'dance');
      poseCam([.15*Math.sin(t),1.1,5.8],[0,1.6,0],48);ambient.intensity=2.5;
      if(k==='mountains_close')poseCam([-.7,2.2,2.4],[-.7,2.1,0],43);
      if(k==='pipe'){poseCam([.7,2.2,2.2],[.8,2.1,0],40);guitarist.arms[1].rotation.z=2.3;}
      if(k==='city'){
        if(s.id===5){put(guitarist,city,.45,0,.8);put(singer,city,-1.0,0,-.65);guitarist.pose(t);singer.pose(t);poseCam([.2,1.6,4.5],[.05,1.65,.35],48);}
        else{put(guitarist,city,1.35,0,1.2);put(singer,city,-.7,0,-.55);guitarist.pose(t);singer.pose(t);poseCam([0,.6,3.4],[0,1.6,0],58);}
      }
      if(k.startsWith('mountains')&&k!=='mountains_empty'){put(singer,mountains,.65,0,.65);put(guitarist,mountains,-.9,0,-.45);singer.pose(t);guitarist.pose(t);poseCam(k==='mountains_close'?[.9,2.1,2.6]:[1.3,1.8,4.8],[.35,k==='mountains_close'?2.05:1.5,.35],k==='mountains_close'?43:48);}
      if(k==='mountains_empty'){singer.g.visible=false;guitarist.g.visible=false;poseCam([0,2,5],[0,2,-4],48);}
    }else if(k==='bulbs'||k==='bulb_macro'){
      select('bulbs');poseCam([k==='bulb_macro'?-.1:-4+u*8,0,k==='bulb_macro'?1.4:3.6],[k==='bulb_macro'?0:-3+u*6,0,0],42);
      glowing.forEach((b,i)=>{b.rotation.y=t*.15+i;b.position.y=Math.sin(t*.4+i)*.08;});
    }else if(k==='bridge'){
      select('bridge');put(singer,bridge,0,0,0);singer.g.position.y=-2.1;singer.pose(t);singer.g.position.y=-2.1;singer.g.children.forEach(o=>{if(o!==singer.head)o.visible=false;});
      poseCam([0,0,3.5-u*1.6],[0,0,0],40);bridgeBulbs.forEach((o,i)=>{o.position.set(Math.sin(t*.25+i*1.8)*1.7,Math.cos(t*.25+i*1.8)*1.0,-.4+i%2*.9);});
    }else if(['tuba','trumpet'].includes(k)){
      select('brass');hall.visible=true;key.intensity=180;fill.intensity=100;put(singer,brass,.4,0,-.5);singer.pose(t,'hands');poseCam(k==='tuba'?[0,1.6,3.0]:[1.4,2.2,2.5],[0,1.4,0],50);horn.rotation.y=.3*Math.sin(t*2);horn.scale.setScalar(k==='tuba'?1.4:.65);
    }else if(k==='hands'){
      select('hands');poseCam([0,1.1,1.4],[0,0,0],44);hands.children.forEach((h,i)=>{if(i>0)h.rotation.y=.14*Math.sin(t*6+i);});
    }else if(['room_wide','room_guitar','torch_face','helmet','helmet_close','tools','weld_close','torch_tools','helmet_arms','chair','room_duo','room_duo_wide'].includes(k)){
      select('room');put(singer,room,0,0,1);put(guitarist,room,2,0,-.5);singer.pose(t,'seated');singer.g.position.y=-.25;guitarist.pose(t,'guitar');instrument.visible=true;
      poseCam([2.6,3.1,6],[0,1.1,0],48);
      if(k==='room_guitar'){put(guitarist,room,0,0,1);guitarist.pose(t,'seated');guitarist.g.position.y=-.2;singer.g.visible=false;poseCam([.4,2.8,4],[0,1.4,1],45);}
      if(k==='chair'){guitarist.g.visible=false;funnel.visible=true;poseCam([1-u*1.1,2.9-u*.7,4.2-u*1.7],[0,1.6,1],45);}
      if(k.startsWith('helmet')){key.intensity=240;fill.intensity=140;helmet.visible=true;singer.head.visible=false;guitarist.g.visible=false;singer.pose(t,'hands');singer.g.position.y=-.25;helmet.position.set(0,1.9,1);poseCam([0,2.0,k==='helmet_close'?2:k==='helmet_arms'?3.2:3.3],[0,1.9,1],40);}
      if(k.includes('torch')||k==='tools'||k==='weld_close'){guitarist.g.visible=false;toolRig.visible=true;torch.visible=true;flame.scale.y=.7+.3*Math.sin(t*20);singer.pose(t,'hands');singer.g.position.y=-.25;
        poseCam(k==='torch_face'?[.3,2.1,3.1]:k==='weld_close'?[0,2.0,2.1]:[.7,1.6,2.9],k==='weld_close'?[0,1.95,1]:[0,1.3,1.5],40);}
      if(k.startsWith('room_duo')){put(singer,room,-1.2,0,2.6);put(guitarist,room,1,0,2.3);singer.pose(t,'dance');guitarist.pose(t,'guitar');poseCam(k==='room_duo'?[1.6,1.8,7.3]:[3.4,3.5,8.9],[0,1.4,2.4],48);}
    }else{
      select('hall');put(singer,hall,-.8,0,.5);put(guitarist,hall,1,0,0);singer.pose(t);guitarist.pose(t,'guitar');instrument.visible=true;
      poseCam([7-u*2,7,9],[0,1.1,-3],53);
      if(cycling){
        crowd.forEach(a=>a.g.visible=false);
        put(singer,hall,.65,-.20,-.1);singer.pose(t,'seated');singer.g.position.y=-.20;
        put(guitarist,hall,-.65,0,-.7);guitarist.pose(t);instrument.visible=false;
        poseCam(s.id===21?[7-u,8,10]:[8-u*1.2,8.8,11],[0,.7,-.7],53);
        if(k==='bicycles')poseCam([7.7,3,5.5],[3.2,1.35,-.3],49);
      }
      if(k==='hall_guitar'&&cycling){poseCam([3.2,3.2,5.4],[0,1.35,-.5],44);}
      if((k==='hall_guitar'&&!cycling)||k==='guitar_crowd'){poseCam([1.9,1.8,4],[1,1.6,0],48);singer.g.visible=false;}
      if(k==='guitar_balcony'||k==='balcony_close'||k==='balcony_upper'){
        put(singer,hall,0,3.6,-9.5);put(guitarist,hall,0,3.6,-9.5);const fl=k==='guitar_balcony';singer.g.visible=!fl;guitarist.g.visible=fl;
        poseCam(k==='balcony_close'?[0,5.05,-7.1]:[.3,1.4,-4],[0,5.6,-9.5],k==='balcony_close'?45:52);crowd.forEach(a=>a.g.visible=false);
      }
      if(k==='crowd'||k==='crowd_close'||k==='eyes'||k==='signs'){
        singer.g.visible=false;guitarist.g.visible=false;poseCam(k==='crowd_close'?[0,2.2,.2]:k==='crowd'?[0,2.6,1.4]:[4,3.9,5],[0,1.7,-2.2],k==='crowd_close'?38:53);
        if(k==='crowd_close'){const a=crowd[2];a.g.position.set(0,0,-1.3);a.pose(t,'hands');}
      }
    }
    if(k!=='bridge'){for(const a of [singer,guitarist])a.g.children.forEach(o=>{if(o!==a.head&&o!==instrument)o.visible=true;});}
    if(k==='city'||['mountains','mountains_close','room_duo','room_duo_wide'].includes(k)){dance(singer,ref,k,s.id);dance(guitarist,ref,k,s.id);}
    seatedLegs.visible=cycling;singer.legs.forEach(l=>l.visible=!cycling);
    if(cycling){ambient.intensity=2.45;key.color.setHex(0xffead3);fill.intensity=115;}
    renderer.render(scene,camera);finish(t);
  }
  return {render, timeline, dispose(){target.dispose();postMat.dispose();postScene.children[0].geometry.dispose();opening.dispose();singer.h.dispose();guitarist.h.dispose();proto.dispose();const disposed=new Set();scene.traverse(o=>{if(o.geometry&&!disposed.has(o.geometry)){disposed.add(o.geometry);o.geometry.dispose();}for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){if(!disposed.has(m)){disposed.add(m);m.map?.dispose();m.dispose();}}});}};
}
