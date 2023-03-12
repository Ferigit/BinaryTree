const LEFT = 0
const RIGHT = 1

class Node {
    constructor(value) {
        this.value = value
        this.children = []
        this.parent = null
        this.pos = { x: 0, y: 0 }
        this.r = 40
    }

    get left() {
        return this.children[LEFT]
    }

    set left(value) {
        value.parent = this
        this.children[LEFT] = value
    }

    get right() {
        return this.children[RIGHT]
    }

    set right(value) {
        value.parent = this
        this.children[RIGHT] = value
    }

    set position(position) {
        this.pos = position
    }

    get position() {
        return this.pos
    }

    get radius() {
        return this.r
    }

}
export { Node as TreeNode };