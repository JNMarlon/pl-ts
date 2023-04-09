import { Dictionary } from './dictionary';
type TVertex = string | number;
export class Graph {
    //정점 ㅇㅇ
    private vertices: TVertex[] = [];
    private adjList: Dictionary<TVertex, TVertex[]> = new Dictionary();
    constructor(private isDirected = false) {}

    addVertex(v: string | number) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    addEdge(a: TVertex, b: TVertex) {
        if (!this.adjList.get(a)) this.addVertex(a);
        if (!this.adjList.get(b)) this.addVertex(b);

        this.adjList.get(a).push(b);
        if (!this.isDirected) this.adjList.get(b).push(a);
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';

        this.vertices.forEach((v, i) => {
            const current = this.vertices[i];
            s += current + '->';

            const neighbors = this.adjList.get(current);
            neighbors.forEach((n, i) => {
                const current = neighbors[i];
                s += current + ' ';
            });
            s += '\n';
            return s;
        });
    }
}
