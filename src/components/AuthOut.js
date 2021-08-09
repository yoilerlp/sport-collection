import React, {useEffect} from 'react'
import { removeToken } from '../util/jwtHandler'

export default function AuthOut() {
    useEffect(()=> {
        removeToken();
    },[])

    return (
        <div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
    )
}
