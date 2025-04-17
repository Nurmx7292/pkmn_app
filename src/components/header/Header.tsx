import React from 'react'
import classes from "./header.module.css"
export const Header = () => {
  return (
    <div className={classes.header}>
        <div className="logo">Pokemon App</div>
        <nav>
            <button>
                Favorites
            </button>
            <button>
                Comparison
            </button>
        </nav>
    </div>
  )
}
