let g;
let e = [];
let id = 0;
let newEdge = {};

function setupGraph() {
  g = new Grafo();

/*   for (let i = 1; i < 10; i++) {
    g.adicionarVertice(new Vertice(i));
  }

  let v = g.vertices;

  e.push(new Aresta(1, v[0], v[1]));
  e.push(new Aresta(1, v[1], v[2]));
  e.push(new Aresta(1, v[3], v[4]));
  e.push(new Aresta(1, v[4], v[5]));
  e.push(new Aresta(1, v[6], v[7]));
  e.push(new Aresta(1, v[7], v[8]));
  e.push(new Aresta(1, v[0], v[3]));
  e.push(new Aresta(1, v[3], v[6]));
  e.push(new Aresta(1, v[1], v[4]));
  e.push(new Aresta(1, v[4], v[7]));
  e.push(new Aresta(1, v[2], v[5]));
  e.push(new Aresta(1, v[5], v[8]));
  e.push(new Aresta(1, v[2], v[4]));

  for (let i of e) {
    g.adicionarAresta(i);
  } */

}


function setup() {
  setupGraph();
  createCanvas(650, 650);
  background(51);


  console.log(g);
}

function mousePressed() {
  for(let v of g.vertices) {
    v.pressed();
  }
}

function keyTyped() {
  if(key === 'v') {
    let v = new Vertice(++id);
    g.adicionarVertice(v);
    v.x = mouseX;
    v.y = mouseY;
  } else if (key === 'e') {
    newEdge = new Aresta(1, undefined, undefined);

  }
  
}

function keyReleased() {
  if (key === 'e') {
    console.log(mouseX + " " + mouseY);
  }
}


function mouseReleased() {
  for(let v of g.vertices) {
    v.released();
  }
}

function draw() {
  background(51);
  for(let e of g.arestas) {
    e.show();
  }

  for(let v of g.vertices) {
    v.show();
  }
}