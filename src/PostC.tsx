import React from "react";

interface Props {
  title: string;
}

export type PostState = {
  count: number;
  data: {
    body: string;
    id: number;
    title: string;
    userId: number;
  }[];
};

export class PostC extends React.Component<Props, PostState> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1, data: [] };
    this.componentDidMount = this.requestData;
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  requestData = async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await req.json();
    this.setState({ data: data });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        <h3>{this.state.count}</h3>
        {this.state.data.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <div>
            <h4>{this.state.data[this.state.count].title}</h4>
            <p>{this.state.data[this.state.count].body}</p>
          </div>
        )}
      </div>
    );
  }
}

export class Test extends PostC {
  render() {
    return <div>23</div>;
  }
}
