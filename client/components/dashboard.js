import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        Dashboard
      </div>
      <div><Link to="/dashboard/profile/5f1a172f-fef4-48a6-954b-50e9f266eabc">Go to Profile</Link></div>
      <div><Link to="/dashboard/main">Go to Main</Link></div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
