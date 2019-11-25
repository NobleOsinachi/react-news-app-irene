import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent";
import Layout from "./components/Layout/Layout";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import SearchBar from "./components/SearchBar/SearchBar";

const asyncSearchPage = asyncComponent( () => import("./containers/SearchPage") );
const asyncSports = asyncComponent( () => import('./containers/Sports') );
const asyncHome = asyncComponent( () => import("./containers/Home") );
const asyncHealth = asyncComponent( () => import('./containers/Health') );
const asyncTechnology = asyncComponent( () => import("./containers/Technology") );
const asyncFinance = asyncComponent( () => import('./containers/Finance') );
const asyncEntertainment = asyncComponent( () => import("./containers/Entertainment") );

class App extends Component 
{

  state = 
  {
    loading:false,
  }

  // Testing Out
  // componentDidMount()
  // {
  //   fetch('./dummyData.json')
  //   .then( resp => resp.json() )
  //   .then( resp => console.log(resp) )
  //   .catch( err => console.log(err) )
  // }

  searchHandler= (keyword) =>
  {
     console.log(keyword);
     
  }
 

  render()
  {
    
    let routes = 
    (
      <Switch>
      
        <Route path="/home" component={asyncSports}/>
        <Route path="/health" component={asyncSports} />
        <Route path="/finance" component={asyncSports} />
        <Route path="/sports" component={asyncSports} />
        <Route path="/technology" component={asyncSports} /> 
        <Route path="/entertainment" component={asyncSports} />
        <Route path="/search" component={asyncSearchPage} /> 
        <Redirect to ="/home" />

      </Switch>
    );

    let view = (
      <Layout>
       <SearchBar search={this.searchHandler} />
       <LoadingPage />
      </Layout>
    );;

    if(!this.state.loading)
    {view =
      (
        <Layout>
         { routes }
         <SearchBar search={this.searchHandler} />         
        </Layout>
      );
    }

    return view;
  }
}  


export default App;
