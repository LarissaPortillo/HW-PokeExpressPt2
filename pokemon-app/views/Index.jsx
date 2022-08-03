const React = require('react');

class Index extends React.Component{
    render(){
        const { pokemon } = this.props.map;
        return(
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pokemon Index</title>
            </head>
            <body>
                <h1>See All the Pokemon!</h1>
                <ul>
                    return(<li><a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).toLowerCase()}</a></li>)
                </ul>
            </body>
            </html>
        );
    }
}

module.exports = Index;