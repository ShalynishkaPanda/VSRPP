import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from "./ProtectedRoute";
import Tables from "./Tables";

function Main() {

    return(
        <div id="main">
            <Routes>
                <Route 
                    exact path="/" 
                    element ={<Login/>}
                />
                <Route
                    path="/user"
                    element={<ProtectedRoute>
                        <Tables/>
                    </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
        );
};

export default Main;