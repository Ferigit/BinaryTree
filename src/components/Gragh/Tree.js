import { TreeNode } from './Node';

class Tree {
    constructor() {
        this.root = null;
        this.startPosition = { x: 400, y: 80 }
        this.axisX = 250
        this.axisY = 180
    }

    getPosition(level, isLeft = false) {
        if (level === 0) {
            return { x: 400, y: 180 }
        } else {
            return { x: isLeft ? (400 - (level * 80) > 0 ? 400 - (level * 80) : 50) : (400 + 90 * level + 80 < 800 ? 400 + 90 * level + 80 : 900), y: level * 80 + 180 }
        }
    }

    insertLevelOrder(arr, i) {
        let root1 = null;

        if (i < arr.length) {

            root1 = new TreeNode(arr[i]);

            if (i === 0) {
                root1.position = this.startPosition
            }

            // insert left child
            if (!!arr[2 * i + 1]) {
                root1.left = this.insertLevelOrder(arr, 2 * i + 1);
                root1.left.position = this.getPosition(2 * i + 1, true)

            }

            // insert right child
            if (!!arr[2 * i + 2]) {
                root1.right = this.insertLevelOrder(arr, 2 * i + 2);
                root1.right.position = this.getPosition(2 * i + 1)
            }
        }

        this.root = root1;
        return this.root;
    }
}

export { Tree as TreeComponent };