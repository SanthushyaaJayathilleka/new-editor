function bold() 
{
    document.execCommand('bold',true.null)
}
function underline() 
{
    document.execCommand('underline',true.null)
}
function italic() 
{
    document.execCommand('italic',true.null)
}


document.querySelectorAll('.left').forEach(function( element) {
        element.addEventListener('click',function () {
            document.getElementById('editor').style.textAlign='left'
        })
    })


document.querySelectorAll('.center').forEach(function (element) {
        element.addEventListener('click', function () {
                document.getElementById('editor').style.textAlign = 'center'
            })
    })


document.querySelectorAll('.right').forEach(function (element) {
        element.addEventListener('click', function () {
            document.getElementById('editor').style.textAlign = 'right'
        })
    })
document.querySelectorAll('.justify').forEach(function (element) {
        element.addEventListener('click',function () {
            document.getElementById('editor').style.textAlign='justify'
        })
    })

let undoStack = [];
let redoStack = [];

const editor = document.getElementById('editor');

function saveStep()
{
    undoStack.push(editor.innerHTML);
}

function undo()
{
    if(undoStack.length>0)
    {
        const currentStep =editor.innerHTML;
        redoStack.push(currentStep);

        const previousStep = undoStack.pop();
        editor.innerHTML = previousStep;
    }
}

function redo()
{
    if(redoStack.length > 0)
    {
        const currentStep = editor.innerHTML;
        undoStack.push(currentStep);

        const nextState = redoStack.pop();
        editor.innerHTML = nextState;
    }
}

editor.addEventListener('input',()=>
{
    saveStep();
});