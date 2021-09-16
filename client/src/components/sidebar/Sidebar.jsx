import React from 'react'

import "./sidebar.css";
import {
  Chat,
  Group,
  Event,
  Plus
} from "@material-ui/icons";
import {AiOutlinePlusCircle } from 'react-icons/all';

function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
          </ul>
          <button className="sidebarButton">Add More</button>
          <hr className="sidebarHr" />
        </div>
        <div className="intigration">
          <h1>Intigration</h1>
        <ul className="sidebarList">
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
          </ul>
          <button className="sidebarButton">Add More</button>
          <hr className="sidebarHr" />
        </div>
        <div className="Profile">
          <h1>Profile</h1>
          <ul className="sidebarList">
          <button className="sidebarButton">Profile</button>
          <button className="sidebarButton">Logout</button>
          </ul>
          <hr className="sidebarHr" />
            <button><i class="bi bi-plus-circle-dotted"></i>Add New Plugins</button>
            <AiOutlinePlusCircle className="sidebarIcon" />
        </div>
      </div>
    )
}

export default Sidebar
