// class HelloWorld extends React.Component {
//     render() {
//         const continents = ['Africa', 'America', 'Asia', 'Austrailia', 'Europe'];
//         const helloContinents = Array.from(continents, c => `Hello ${c}!`);
//         const message = helloContinents.join(' ');

//         return (
//             <div title="Outer Div">
//                 <h1>{message}</h1>
//             </div>
//         );
//     }
// }

const issues = [
    {
        id: 1,
        status: 'New',
        owner: 'Jamey',
        effort: 5,
        created: new Date('2023-07-05'),
        due: undefined,
        title: 'Error in console when clicking Add'
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Eddie',
        effort: 14,
        created: new Date('2023-07-04'),
        due: new Date('2023-07-30'),
        title: 'Missing bottom border on panel'
    }
];

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
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.due ? issue.due.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        // const rowStyle = { border: "1px solid silver", padding: 4 };
        const issueRows = issues.map(issue => {
            <IssueRow key={issue.id} issue={issue} />
        });
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => {
                        <IssueRow key={issue.id} issue={issue} />
                        console.log(issue);
                    })}
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