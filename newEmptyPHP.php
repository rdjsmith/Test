<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

     require 'db/conn.php';
     
     $query = mysql_query("SELECT * FROM `ym_sizes`");
     
     echo (mysql_fetch_array($result))
    
    
