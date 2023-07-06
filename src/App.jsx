class HelloWorld extends React.Component {
    render() {
        const continents = ['Africa', 'America', 'Asia', 'Austrailia', 'Europe'];
        const helloContinents = Array.from(continents, c => `Hello ${c}!`);
        const message = helloContinents.join(' ');
        
        return (
            <div title="Outer Div">
                <h1>{message}</h1>
            </div>
        );
    }
}

class IssueFilter extends React.Component {
    render() {
        return (
            <div>Placeholder for IssueFilter</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>Placeholder for IssueAdd</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return (
            <tr>
                <td style={style}>{this.props.issue_id}</td>
                {/* <td style={style}>{this.props.issue_title}</td> */}
                <td style={style}>{this.props.children}</td>
            </tr>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const rowStyle = { border: "1px solid silver", padding: 4 };
        return (
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow rowStyle={rowStyle} issue_id={1}>
                        Error in console when clicking Add
                    </IssueRow>
                    <IssueRow rowStyle={rowStyle} issue_id={2}>
                        Missing <strong>bottom</strong> border on panel
                    </IssueRow>
                </tbody>
            </table>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        );
    }
}

// const element = <HelloWorld />;
const element = <IssueList />;
ReactDOM.render(element, document.querySelector('#content'));