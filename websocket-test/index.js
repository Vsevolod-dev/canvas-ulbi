const btn = document.getElementById('btn')
const socket =  new WebSocket('ws://localhost:5000')

socket.onopen = () => {
    socket.send(JSON.stringify({
        id: 123,
        username: "Seva",
        method: "connection"
    }))
}

socket.onmessage = (event) => {
    console.log('Message was received: ' + event.data)
}

btn.onclick = () => {
    socket.send(JSON.stringify({
        message: "Hi Server!",
        id: Date.now(),
        username: "Seva",
        method: "message"
    }))
}
