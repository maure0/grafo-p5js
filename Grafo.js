function Grafo() {
    this.vertices = [];
    this.arestas = [];

    this.adicionarVertice = (v) => {
        this.vertices.push(v);
    }

    this.adicionarAresta = (e) => {
        this.arestas.push(e);
    }

}


function Vertice(data) {
    this.data = data;
    this.arestasIncidentes = [];
    this.x = 0;
    this.y = 0;
    this.diameter = 50;

    this.show = () => {
        fill(51);
        stroke(255);
        ellipse(this.x, this.y, this.diameter);
        noStroke();
        fill(255);
        textSize(20);
        text(this.data, this.x - 10, this.y + 10);
        this.update();
    }

    this.pressed = () => {
        if (dist(this.x, this.y, mouseX, mouseY) <= this.diameter/2) {
            this.dragging = true;
            this.mouseXOffset = this.x - mouseX;
            this.mouseYOffset = this.y - mouseY;
        }
    }

    this.released = () => {
        this.dragging = false;
    }

    this.update = () => {
        if(this.dragging) {
            this.x = mouseX + this.mouseXOffset;
            this.y = mouseY + this.mouseYOffset;
        }
    }

}
function Aresta(peso, v1, v2) {
    this.peso = peso;
    this.vertices = [];
    this.vertices.push(v1);
    this.vertices.push(v2);

    this.show = () => {
        stroke(255);
        line(v1.x, v1.y, v2.x, v2.y);
    }
}