import { useState, useEffect } from 'react';
import { TreeComponent } from '../../components';

function useDrawBinaryTree() {

    const [tree, setTree] = useState(null);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (tree)
            bfs();
    }, [tree])

    const handleInputOnChange = (newVal) => {
        if (!!newVal) {
            setTree(null);
            const NewTree = new TreeComponent()
            const splitArray = newVal?.split(" ").filter(item => !!item);
            const tmpTree = NewTree.insertLevelOrder(splitArray, 0);
            setTree(tmpTree)
            setInputValue(newVal);
        } else {
            setTree(null)
            setInputValue(newVal);
        }
    };

    const canv = document.getElementById("treeCanvas");
    const ctx = canv ? canv.getContext("2d") : null;

    const bfs = () => {
        ctx.clearRect(0, 0, 1000, 900);
        const queue = [];
        const black = "#000"

        queue.push(tree);


        while (queue.length !== 0) {
            const node = queue.shift();
            const { x, y } = node.position

            const color = "#fff";
            ctx.beginPath();
            ctx.arc(x, y, node.radius, 0, 2 * Math.PI)
            ctx.strokeStyle = black
            ctx.getLineDash()
            ctx.fillStyle = color
            ctx.fill()
            ctx.stroke()
            ctx.strokeStyle = black
            ctx.font = "16px Arial";

            ctx.strokeText(node.value, x - 15, y + 5)


            node.children.forEach(child => {

                const { x: x1, y: y1 } = child.position;
                ctx.beginPath();
                ctx.moveTo(x, y + child.radius);
                ctx.lineTo(x1, y1 - child.radius)
                ctx.stroke();
                queue.push(child)
            });

        }
    }


    return { handleInputOnChange, bfs, inputValue }
}

export default useDrawBinaryTree;
