var fakeAlerts = [
    {
        name: "IPHM Web UI on kirill",
        state: "down",
        duration: "1 d 21 min",
        prevstate: "ok",
        date: "04/30/2015",
        time: "6:08:04 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHM Web UI on kirill",
        state: "down",
        duration: "1 d 24 min",
        prevstate: "ok",
        date: "04/30/2015",
        time: "6:08:04 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "Disk C: free space on kirill.lan",
        state: "down",
        duration: "3 min",
        prevstate: "ok",
        date: "05/05/2015",
        time: "5:47:20 PM",
        message: "Poll failed: Error while requesting the amount of free space: The system cannot find the path specified."
    },
    {
        name: "Disk C: free space on kirill.lan",
        state: "down",
        duration: "5 min",
        prevstate: "ok",
        date: "05/05/2015",
        time: "5:47:20 PM",
        message: "Poll failed: Error while requesting the amount of free space: The system cannot find the path specified."
    },
    {
        name: "Disk C: free space on kirill.lan",
        state: "down",
        duration: "7 min",
        prevstate: "ok",
        date: "05/05/2015",
        time: "5:47:20 PM",
        message: "Poll failed: Error while requesting the amount of free space: The system cannot find the path specified."
    },
    {
        name: "Disk C: free space on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "05/05/2015",
        time: "6:06:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S), port 8085 on 10.1.0.64",
        state: "down",
        duration: "1 min",
        prevstate: "ok",
        date: "05/25/2015",
        time: "6:09:19 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S), port 8085 on 10.1.0.64",
        state: "down",
        duration: "1 min",
        prevstate: "ok",
        date: "05/25/2015",
        time: "6:32:03 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S), port 8085 on 10.1.0.64",
        state: "down",
        duration: "1 min",
        prevstate: "ok",
        date: "05/25/2015",
        time: "6:35:17 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S), port 8085 on 10.1.0.64",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "05/25/2015",
        time: "6:54:43 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S), port 8085 on 10.1.0.64",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "05/25/2015",
        time: "6:58:39 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "05/25/2015",
        time: "6:58:38 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "05/25/2015",
        time: "6:58:49 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on monstera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "05/25/2015",
        time: "6:10:52 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Memory available on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "05/27/2015",
        time: "4:05:58 PM",
        message: "Timeout of 5 seconds exceeded 2 times"
    },
    {
        name: "Memory available on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "05/27/2015",
        time: "4:06:02 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SMTP on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "warning",
        date: "05/27/2015",
        time: "4:05:58 PM",
        message: "Poll failed: Could not connect to the SMTP server. connect operation aborted"
    },
    {
        name: "SMTP on monstera.lan",
        state: "warning",
        duration: "",
        prevstate: "down",
        date: "05/27/2015",
        time: "4:06:06 PM",
        message: "Performance improvement to Warning level from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "1 min",
        prevstate: "ok",
        date: "05/28/2015",
        time: "9:27:37 AM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "05/28/2015",
        time: "9:27:37 AM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "SSH (Remote Script or Program) on monstera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "05/29/2015",
        time: "12:08:48 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SMTP on monstera.lan",
        state: "warning",
        duration: "",
        prevstate: "down",
        date: "05/31/2015",
        time: "2:24:01 PM",
        message: "Performance improvement to Warning level from down state"
    },
    {
        name: "SMTP, port 465 on monstera.lan",
        state: "warning",
        duration: "",
        prevstate: "down",
        date: "05/31/2015",
        time: "2:24:01 PM",
        message: "Performance improvement to Warning level from down state"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "06/02/2015",
        time: "4:56:54 PM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "06/02/2015",
        time: "5:31:22 PM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "06/02/2015",
        time: "4:56:54 PM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "06/02/2015",
        time: "5:30:38 PM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "06/02/2015",
        time: "5:31:22 PM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "06/02/2015",
        time: "5:30:29 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "06/02/2015",
        time: "5:31:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S), port 8001 on 74.115.213.38",
        state: "down",
        duration: "37 min",
        prevstate: "unknown",
        date: "06/02/2015",
        time: "4:09:59 PM",
        message: "Poll failed: Response validation failed"
    },
    {
        name: "HTTP(S), port 8001 on 74.115.213.38",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "06/02/2015",
        time: "4:09:59 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on radio1.sintonet.net",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "06/03/2015",
        time: "2:24:55 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Generic Trap Regexp on 10.1.0.225",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "08/01/2015",
        time: "5:35:47 PM",
        message: "etails:          "
    },
    {
        name: "SNMP Generic Trap Regexp on 10.1.0.225",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "08/01/2015",
        time: "5:35:55 PM",
        message: "etails:          "
    },
    {
        name: "PING on blablabla",
        state: "down",
        duration: "6 min",
        prevstate: "unknown",
        date: "11/28/2015",
        time: "4:48:34 PM",
        message: "Down: Timeout of 2 seconds exceeded, spike filter applied"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/01/2015",
        time: "3:37:43 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "3:38:31 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:15:56 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on adm-tasks.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:15:56 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:15:58 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on ldap2.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:04 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on monstera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:15:59 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on oak.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:17 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on portal.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:11 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on svn.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:05 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on traffic.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:15:52 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/01/2015",
        time: "11:15:17 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/01/2015",
        time: "11:16:06 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/02/2015",
        time: "12:36:39 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/02/2015",
        time: "12:38:29 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/02/2015",
        time: "10:01:20 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/02/2015",
        time: "10:01:32 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/02/2015",
        time: "10:03:21 AM",
        message: "Poll failed: agent is not connected"
    },
    {
        name: "PING on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/02/2015",
        time: "10:03:49 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SMTP on ldap2.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/02/2015",
        time: "2:56:36 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SMTP, port 465 on ldap2.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/02/2015",
        time: "3:57:55 AM",
        message: "Poll failed: Failed to get server status after sending credentials: recv() timed out."
    },
    {
        name: "SMTP, port 465 on ldap2.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/02/2015",
        time: "3:58:46 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/03/2015",
        time: "1:52:31 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/03/2015",
        time: "4:48:31 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/03/2015",
        time: "1:53:19 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/03/2015",
        time: "4:49:19 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/03/2015",
        time: "12:17:55 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/03/2015",
        time: "12:18:04 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/04/2015",
        time: "10:35:31 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/04/2015",
        time: "11:22:44 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/04/2015",
        time: "10:35:43 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/04/2015",
        time: "11:22:56 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "30 min",
        prevstate: "unknown",
        date: "12/04/2015",
        time: "10:35:30 AM",
        message: "Poll failed: agent is not connected (disabled)"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/04/2015",
        time: "10:35:30 AM",
        message: "Poll failed: agent is not connected (disabled)"
    },
    {
        name: "SSH (Remote Script or Program) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/04/2015",
        time: "6:48:46 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password); Authentication by keyboard-interactive failed: Authentication failed (keyboard-interactive)"
    },
    {
        name: "SSH (Remote Script or Program) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/04/2015",
        time: "6:49:42 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/05/2015",
        time: "8:11:54 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "PING on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/05/2015",
        time: "11:16:09 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SMTP, port 465 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/05/2015",
        time: "12:08:23 PM",
        message: "Poll failed: Failed to get server status after sending credentials: recv() timed out."
    },
    {
        name: "SMTP, port 465 on monstera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/05/2015",
        time: "12:09:13 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/08/2015",
        time: "11:16:01 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/08/2015",
        time: "2:23:09 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/08/2015",
        time: "3:36:47 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/08/2015",
        time: "4:34:14 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/08/2015",
        time: "4:38:47 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/08/2015",
        time: "11:16:12 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/08/2015",
        time: "2:23:20 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/08/2015",
        time: "3:36:59 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/08/2015",
        time: "4:34:27 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/08/2015",
        time: "4:38:59 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Custom on chimera.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/08/2015",
        time: "10:19:20 AM",
        message: "Poll failed: No Such Object available on this agent at this OID"
    },
    {
        name: "SSH (Remote Script or Program) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/08/2015",
        time: "3:06:45 PM",
        message: "Poll failed: Authentication by password failed: Timeout was reached; Authentication by keyboard-interactive failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/08/2015",
        time: "3:08:41 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/09/2015",
        time: "9:50:54 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/09/2015",
        time: "9:52:44 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "12:46:42 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "3:07:42 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "9:05:42 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "11:52:42 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "12:59:42 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "12:47:31 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "3:08:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "9:06:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "11:53:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "1:00:30 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "10:21:38 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "10:22:28 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "5 d 1 hr 51 min",
        prevstate: "ok",
        date: "12/05/2015",
        time: "8:11:54 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/10/2015",
        time: "10:13:26 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "10:13:26 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SMTP, port 465 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "12:34:43 PM",
        message: "Poll failed: Failed to get server status after sending credentials: recv() timed out."
    },
    {
        name: "SMTP, port 465 on monstera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/10/2015",
        time: "12:35:33 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "10:03:36 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/10/2015",
        time: "10:04:56 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "12:10:08 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "12:10:57 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "9:00:40 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "9:02:39 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "4:19:56 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "1:15:21 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "10:19:22 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "1:16:11 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "10:21:12 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "4:19:56 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "9:01:19 AM",
        message: "Poll failed: Failed to connect to SSH server: Timeout exceeded while connecting"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "12:39:19 PM",
        message: "Poll failed: Failed to establish SSH session: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "9:02:12 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "12:41:11 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "4:32:47 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "6:22:49 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "7:11:03 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "8:12:59 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "10:02:51 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "1:05:01 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "2:19:06 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "4:19:56 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "4:33:46 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "6:23:46 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "8:13:50 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "10:03:45 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "1:06:45 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "2:20:45 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "4:32:47 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "6:22:49 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "7:11:03 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "8:12:59 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "10:02:51 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "1:05:01 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/11/2015",
        time: "2:19:06 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "4:19:56 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "4:33:46 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "6:23:46 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "7:12:42 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "8:14:42 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "10:03:45 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "1:06:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "unknown",
        duration: "",
        prevstate: "down",
        date: "12/11/2015",
        time: "2:20:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "1:34:36 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:58:04 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "3:22:04 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "1:35:24 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:58:52 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "3:22:52 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on birch.lan #2",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "6:33:07 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "9:04:55 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "9:06:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:03:39 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:05:39 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:08:41 PM",
        message: "Down: Unacceptable response code: '503'. Consider adding it to the list of accepted response codes in client GUI."
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:04:37 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:06:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:16:06 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "6:53:16 PM",
        message: "Poll failed: agent is not connected"
    },
    {
        name: "PING on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "6:53:48 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:11:36 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:16:06 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "9:05:33 AM",
        message: "Poll failed: Failed to connect to SSH server: Timeout exceeded while connecting"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "9:06:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "6:34:33 PM",
        message: "Poll failed: Query failed: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Speed on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "6:35:43 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:02:36 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "3:52:40 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "6:43:41 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:10:39 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:33:31 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:52:09 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:08:42 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:07:34 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "3:54:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "6:45:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:12:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:35:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:53:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:19:00 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "6:34:12 PM",
        message: "Poll failed: Query failed: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Volume on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "6:36:31 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:02:46 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "3:52:43 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "6:43:43 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:10:43 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:33:44 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "2:52:12 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/12/2015",
        time: "10:09:06 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:05:51 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "3:54:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "6:45:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:12:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:35:43 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "2:54:11 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/12/2015",
        time: "10:18:56 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/13/2015",
        time: "7:48:14 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/13/2015",
        time: "7:53:04 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/14/2015",
        time: "10:58:32 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/14/2015",
        time: "10:59:20 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/14/2015",
        time: "3:29:32 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/14/2015",
        time: "3:30:22 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "3:57:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "7:46:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "11:17:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "11:50:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "2:10:15 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "5:37:15 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "3:58:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "7:47:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "11:18:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "11:51:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "2:11:03 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "5:38:03 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "9:14:50 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "9:37:51 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "9:16:40 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "9:38:41 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "8:18:54 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "1:22:17 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "1:46:17 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "8:20:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "1:24:53 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "1:48:53 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "8:18:35 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "1:22:29 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/15/2015",
        time: "1:46:29 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "8:20:28 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "1:24:28 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/15/2015",
        time: "1:48:28 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/16/2015",
        time: "5:18:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/16/2015",
        time: "8:48:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/16/2015",
        time: "10:00:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/16/2015",
        time: "10:49:15 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/16/2015",
        time: "5:19:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/16/2015",
        time: "8:49:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/16/2015",
        time: "10:01:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/16/2015",
        time: "10:50:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "MSSQL Database on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/16/2015",
        time: "5:23:47 PM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/17/2015",
        time: "1:49:45 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/17/2015",
        time: "1:50:33 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/17/2015",
        time: "10:02:59 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/17/2015",
        time: "1:33:17 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/17/2015",
        time: "1:34:06 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/17/2015",
        time: "8:25:07 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "MSSQL Database on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/17/2015",
        time: "10:50:12 AM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/17/2015",
        time: "10:11:51 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/17/2015",
        time: "10:11:51 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/17/2015",
        time: "10:03:06 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/17/2015",
        time: "10:03:21 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "11:31:41 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "11:32:29 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on chimera.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "9:29:53 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on chimera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:30:43 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:01:21 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "10:25:11 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "11:30:12 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "11:34:13 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "12:48:12 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "10:27:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "11:31:02 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "11:38:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "12:49:02 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "9:45:52 AM",
        message: "Poll failed: agent is not connected"
    },
    {
        name: "PING on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:46:21 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:01:21 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Service: iphost on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/18/2015",
        time: "3:29:31 PM",
        message: "Poll failed: Failed to check the service: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "9:02:26 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "9:38:50 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "11:48:44 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "12:39:44 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "12:59:44 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:01:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:04:26 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:41:26 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "11:50:43 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "12:41:42 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "1:01:43 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "9:38:53 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "11:48:12 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "12:39:12 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/18/2015",
        time: "1:00:07 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:03:52 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "9:40:52 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "11:50:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "12:41:06 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/18/2015",
        time: "1:02:07 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/19/2015",
        time: "4:44:32 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/19/2015",
        time: "4:47:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/19/2015",
        time: "4:44:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/19/2015",
        time: "4:46:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/20/2015",
        time: "10:09:15 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/20/2015",
        time: "10:10:03 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/20/2015",
        time: "8:04:39 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/20/2015",
        time: "8:05:30 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/21/2015",
        time: "3:26:14 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/21/2015",
        time: "3:27:04 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "2:06:06 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "2:43:06 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "2:06:54 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "2:43:54 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on traffic.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "1:35:07 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on traffic.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "1:36:46 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "Memory available on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "1:35:08 PM",
        message: "Poll failed: Query failed: Shutting down"
    },
    {
        name: "Memory available on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "1:37:42 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "SNMP Traffic Speed on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/22/2015",
        time: "1:37:26 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Traffic Speed on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "1:54:20 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "10:30:21 AM",
        message: "Poll failed: Failed to establish SSH session: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "10:31:12 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "9:59:08 PM",
        message: "Poll failed: The service 'IPHost Network Monitor' is not running now"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "10:01:58 PM",
        message: "Poll failed: The service is not found: The specified service does not exist as an installed service."
    },
    {
        name: "Service: iphost on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "10:18:38 PM",
        message: "Poll failed: Failed connecting to the host: The RPC server is unavailable."
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "1:37:24 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "10:00:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "10:08:00 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "10:19:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "10:18:02 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "10:21:01 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/22/2015",
        time: "10:17:46 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/22/2015",
        time: "10:20:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "1:08:06 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "7:19:06 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "1:08:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "7:19:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on 10.1.0.200",
        state: "down",
        duration: "30 min",
        prevstate: "unknown",
        date: "12/23/2015",
        time: "3:34:41 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on anthill.lan #2",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "4:30:10 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on anthill.lan #2",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "4:30:26 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "12:07:34 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "12:08:27 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "8:52:12 AM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "8:14:38 PM",
        message: "Poll failed: Failed to establish SSH session: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "8:53:04 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "8:15:26 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/23/2015",
        time: "6:27:53 PM",
        message: "Poll failed: failed to load http://ngs.ru/? request (internal server error)"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/23/2015",
        time: "6:27:53 PM",
        message: "Poll failed: failed to load http://ngs.ru/? request (internal server error)"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/23/2015",
        time: "7:27:55 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "11:21:08 AM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "11:21:59 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "8:05:09 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "8:06:01 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "10:03:08 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "9:31:24 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "9:32:01 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "9:31:28 AM",
        message: "Poll failed: aborted by service"
    },
    {
        name: "PING on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "9:32:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on portal.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "9:31:24 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on portal.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "9:32:01 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on quetzalcoatl.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "9:31:24 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on quetzalcoatl.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "9:32:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/24/2015",
        time: "10:09:58 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/24/2015",
        time: "11:06:58 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "10:09:58 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "10:49:58 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "11:06:58 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "11:42:58 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "11:56:29 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "10:47:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "11:04:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "11:40:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "11:53:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "9:31:24 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "9:32:01 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Traffic Volume on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "9:31:24 AM",
        message: "Poll failed: Cannot create SNMP session: Unknown host (hpmfu.lan:161)"
    },
    {
        name: "SNMP Traffic Volume on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "9:32:57 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "12:28:08 PM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "12:28:58 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "10:04:28 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "10:04:28 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/24/2015",
        time: "7:32:25 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/24/2015",
        time: "7:32:25 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/24/2015",
        time: "8:32:18 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "3:58:12 PM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts ext on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "3:58:12 PM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts ext on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "3:58:51 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "8:01:05 PM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "6:05:58 AM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "7:14:58 AM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "8:01:56 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:06:58 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "7:15:58 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "3:59:02 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "5:43:57 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "10:03:57 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "1:14:56 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "2:43:56 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "5:44:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "10:04:44 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "1:15:44 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "2:44:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "4:32:01 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "12/25/2015",
        time: "12:54:28 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "12:57:18 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/24/2015",
        time: "11:56:29 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "4:31:59 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "TCP on iphost-design-static.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:51:19 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "5:58:25 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "6:10:27 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "6:35:26 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "7:11:25 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "7:36:24 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "9:26:27 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "11:04:25 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "11:40:24 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "1:06:30 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "4:32:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:00:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:12:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:37:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "7:13:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "7:38:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "9:28:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "11:06:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "11:42:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "1:08:24 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "5:58:22 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "6:10:13 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "6:35:25 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "7:11:18 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "7:36:11 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "9:26:09 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "11:04:09 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "11:40:19 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "1:06:29 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "4:32:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:00:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:12:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "6:38:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "7:13:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "7:38:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "9:28:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "11:06:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "11:42:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "1:09:08 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "2:47:24 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "2:32:54 PM",
        message: "Poll failed: process is still running"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/25/2015",
        time: "2:32:54 PM",
        message: "Poll failed: process is still running"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/25/2015",
        time: "3:25:57 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "2:04:03 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "2:04:53 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "1 min",
        prevstate: "unknown",
        date: "12/26/2015",
        time: "12:39:12 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "12:40:24 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on reg",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:12:08 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:12:08 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:11:51 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:11:51 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on wiki.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:11:38 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on wiki.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:11:38 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:31:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "10:22:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:11:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "9:31:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "10:22:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "11:48:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "9:29:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "10:20:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "11:46:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "7:49:09 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "7:50:40 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "8:50:40 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "7:51:50 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "7:52:39 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "8:52:39 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "7:49:15 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "7:50:22 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "8:50:11 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "7:51:14 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "7:53:03 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "8:52:03 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "12:39:13 PM",
        message: "Poll failed: process finished with error"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "12:53:18 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "8:32:01 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/26/2015",
        time: "8:32:01 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/26/2015",
        time: "10:31:54 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "12:52:26 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "6:09:26 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "12:53:15 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "6:10:15 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:15:32 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:16:03 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:17:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "down",
        duration: "2 min",
        prevstate: "unknown",
        date: "12/27/2015",
        time: "8:50:27 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:14:18 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "12/27/2015",
        time: "9:10:33 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:30:23 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:11:26 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:16:21 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:21:49 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:23:07 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:37:37 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:28:36 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:55:41 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on wiki.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:48:18 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/26/2015",
        time: "11:48:45 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/27/2015",
        time: "2:38:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/27/2015",
        time: "3:31:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/27/2015",
        time: "5:43:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:32:41 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "2:14:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "2:38:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "3:31:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "5:13:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "5:43:45 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:32:41 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "2:12:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "2:36:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "3:29:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "5:11:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "5:41:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:08:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:21:11 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:39:22 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "10:00:35 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "12:03:33 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "12:27:23 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "1:28:26 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "1:55:23 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "4:31:25 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "6:46:34 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "7:34:22 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:12:40 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:35:42 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:49:39 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:04:22 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "10:13:34 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:41:17 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "10:03:17 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "12:06:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "12:29:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "1:30:18 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "1:57:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "4:33:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "6:49:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "7:38:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:15:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:38:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:52:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:06:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "10:16:17 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:39:41 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "10:00:40 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "12:03:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "12:27:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "1:28:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "1:55:42 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "4:31:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "6:46:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "7:34:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:12:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:35:43 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "8:49:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "9:04:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "10:13:41 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:41:40 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "10:02:40 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "12:05:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "12:29:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "1:30:39 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "1:57:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "4:33:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "6:48:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "7:37:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:14:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:37:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:51:39 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "9:06:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "10:15:40 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/27/2015",
        time: "7:58:56 AM",
        message: "Poll failed: timeout exceeded while running process"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/27/2015",
        time: "8:13:30 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/28/2015",
        time: "2:53:26 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/28/2015",
        time: "2:54:14 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "REGSERVER ALIVE on reg",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "12/28/2015",
        time: "5:27:44 PM",
        message: "Poll failed: Failed to connect to 10.1.0.64:8094 over TCP/IP"
    },
    {
        name: "REGSERVER ALIVE on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/28/2015",
        time: "5:27:44 PM",
        message: "Poll failed: Failed to connect to 10.1.0.64:8094 over TCP/IP"
    },
    {
        name: "REGSERVER ALIVE on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/28/2015",
        time: "6:00:36 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/28/2015",
        time: "12:15:38 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/28/2015",
        time: "12:18:17 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/28/2015",
        time: "12:15:41 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/28/2015",
        time: "12:17:40 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/28/2015",
        time: "3:14:06 PM",
        message: "Poll failed: timeout exceeded while running process"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/28/2015",
        time: "3:28:30 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on komarov.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/29/2015",
        time: "1:00:02 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on komarov.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/29/2015",
        time: "1:04:01 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/29/2015",
        time: "1:48:12 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/29/2015",
        time: "1:49:02 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "12/29/2015",
        time: "7:53:06 AM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "12/29/2015",
        time: "7:54:02 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/02/2015",
        time: "11:37:45 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/02/2015",
        time: "10:53:25 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/02/2015",
        time: "11:38:33 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "W: free % on kirill.lan",
        state: "down",
        duration: "31 min",
        prevstate: "unknown",
        date: "01/02/2015",
        time: "10:53:26 PM",
        message: "Poll failed: Error while requesting the amount of free space: The system cannot find the path specified."
    },
    {
        name: "W: free % on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/02/2015",
        time: "10:53:26 PM",
        message: "Poll failed: Error while requesting the amount of free space: The system cannot find the path specified."
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/02/2015",
        time: "10:53:47 PM",
        message: "Poll failed: process is still running"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/02/2015",
        time: "11:01:13 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "3:01:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "11:02:01 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "11:02:52 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "7:56:24 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "8:45:25 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "8:57:25 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "9:17:49 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "9:17:49 AM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "9:30:24 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "6:41:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "7:58:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "8:47:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "8:59:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "9:20:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "9:32:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "6:39:26 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "7:56:26 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "8:45:27 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "8:57:26 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/04/2015",
        time: "9:30:26 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "6:41:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "7:58:26 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "8:47:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "8:59:26 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "9:20:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/04/2015",
        time: "9:32:26 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:01:06 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "2:31:27 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/05/2015",
        time: "12:01:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/05/2015",
        time: "2:32:15 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on komarov.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:55:16 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:55:18 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:55:16 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:55:16 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:55:16 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:23:45 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "01/05/2015",
        time: "12:23:45 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/05/2015",
        time: "12:26:24 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/05/2015",
        time: "12:26:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "2:00:27 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "6:45:27 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "9:29:28 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "2:01:16 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "6:46:15 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "9:30:15 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:28:42 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "3:29:33 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:19:04 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/06/2015",
        time: "7:23:04 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:19:04 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "7:01:04 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "7:23:04 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "6:58:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "7:20:54 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Custom on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "3:28:54 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Traffic Speed on hpmfu.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:18:24 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Traffic Speed on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:18:24 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Traffic Speed on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "3:30:13 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Traffic Volume on hpmfu.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:18:09 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Traffic Volume on hpmfu.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/06/2015",
        time: "3:18:09 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "SNMP Traffic Volume on hpmfu.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/06/2015",
        time: "3:29:59 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/07/2015",
        time: "1:36:27 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/07/2015",
        time: "10:35:27 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/07/2015",
        time: "1:37:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/07/2015",
        time: "10:36:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/07/2015",
        time: "1:01:56 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/07/2015",
        time: "10:02:57 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/07/2015",
        time: "1:02:46 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/07/2015",
        time: "10:11:20 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "PING on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/07/2015",
        time: "10:11:20 PM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "01/07/2015",
        time: "10:03:48 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "01/07/2015",
        time: "10:03:50 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: The RPC server is unavailable."
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/08/2015",
        time: "1:02:27 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/08/2015",
        time: "8:00:27 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/08/2015",
        time: "8:02:14 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "1:03:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "8:01:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "8:03:02 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/08/2015",
        time: "2:36:58 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on zarafa.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "2:37:48 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "1 min",
        prevstate: "unknown",
        date: "01/08/2015",
        time: "2:44:36 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "2:45:48 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "3:57:50 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "3:57:50 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "ProcessCount Delta on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "2:45:19 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "SNMP Custom on chimera.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "2:48:12 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Uptime Delta (1 expected) on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "2:44:53 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "Uptime, days on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "2:44:39 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "4:00:12 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/08/2015",
        time: "4:00:12 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/09/2015",
        time: "2:03:44 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/09/2015",
        time: "2:05:43 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/09/2015",
        time: "2:04:41 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/09/2015",
        time: "2:08:38 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/09/2015",
        time: "7:48:12 AM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/09/2015",
        time: "7:50:12 AM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/09/2015",
        time: "7:49:06 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/09/2015",
        time: "7:51:09 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "01/09/2015",
        time: "2:04:48 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/09/2015",
        time: "2:08:10 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "2 min",
        prevstate: "ok",
        date: "01/09/2015",
        time: "2:04:07 AM",
        message: "Down: Timeout of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/09/2015",
        time: "2:08:31 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on komarov.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/10/2015",
        time: "3:15:24 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on komarov.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/10/2015",
        time: "3:15:24 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/10/2015",
        time: "5:16:13 PM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/10/2015",
        time: "5:17:05 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/11/2015",
        time: "10:47:14 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/11/2015",
        time: "10:48:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/11/2015",
        time: "2:10:43 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/11/2015",
        time: "4:02:43 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/11/2015",
        time: "2:11:33 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/11/2015",
        time: "4:03:34 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/11/2015",
        time: "8:01:13 AM",
        message: "Poll failed: Authentication by password failed: Timeout was reached"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/11/2015",
        time: "8:02:07 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on komarov.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/12/2015",
        time: "11:49:15 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "ProcessCount Delta on kirill.lan",
        state: "down",
        duration: "30 min",
        prevstate: "unknown",
        date: "01/12/2015",
        time: "2:47:21 PM",
        message: "Poll failed: Incorrect query type"
    },
    {
        name: "ProcessCount Delta on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/12/2015",
        time: "3:18:11 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "ProcessCount Delta on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/12/2015",
        time: "2:47:21 PM",
        message: "Poll failed: Incorrect query type"
    },
    {
        name: "Uptime Delta (1 expected) on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/12/2015",
        time: "2:47:21 PM",
        message: "Poll failed: Incorrect query type"
    },
    {
        name: "Uptime Delta (1 expected) on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/12/2015",
        time: "2:48:12 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/13/2015",
        time: "8:01:30 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "8:02:08 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/13/2015",
        time: "10:29:34 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/13/2015",
        time: "10:30:46 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/13/2015",
        time: "10:32:46 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "10:29:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "10:31:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on iphost-design.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "10:34:37 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/13/2015",
        time: "9:20:07 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on neptune.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "9:20:57 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on portal.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "3:02:53 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/13/2015",
        time: "2:56:47 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/13/2015",
        time: "2:56:59 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/14/2015",
        time: "11:16:58 AM",
        message: "Poll failed: Timeout exceeded"
    },
    {
        name: "#attempts on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "11:17:22 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/14/2015",
        time: "2:02:29 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "2:03:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Uptime Delta (1 expected) on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/14/2015",
        time: "11:16:45 AM",
        message: "Poll failed: Incorrect query type"
    },
    {
        name: "ProcessCount Delta on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/14/2015",
        time: "11:16:45 AM",
        message: "Poll failed: Incorrect query type"
    },
    {
        name: "Service: iphost on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "11:16:45 AM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "11:16:45 AM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "Uptime Delta (1 expected) on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "11:19:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "W: free % on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/14/2015",
        time: "11:16:47 AM",
        message: "Poll failed: Error while requesting the amount of free space: The system cannot find the path specified."
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/14/2015",
        time: "8:16:17 PM",
        message: "Poll failed: cannot start WTM process"
    },
    {
        name: "Web Transaction monitor on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "8:31:02 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/14/2015",
        time: "11:17:07 AM",
        message: "Poll failed: process is still running"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/14/2015",
        time: "12:16:26 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "2:22:37 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "8:06:53 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "2:23:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "8:07:31 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "10:15:36 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "6:51:04 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "10:17:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "6:51:13 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:05:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "6:46:39 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "6:47:18 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:05:40 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "ProcessCount Delta on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "10:41:34 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "10:14:41 AM",
        message: "Poll failed: Failed to connect to SSH server: Failed to connect to 10.1.0.54:22 over TCP/IP"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "10:16:43 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "4:19:10 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "4:31:09 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "7:10:09 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "11:14:11 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "11:14:11 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "12:03:16 PM",
        message: "Poll failed: Query failed: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:06:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:21:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:33:09 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "7:12:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "11:16:51 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "12:05:51 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "5:22:51 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "4:18:59 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "4:31:02 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "7:10:01 AM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "12:03:18 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "5:20:58 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/15/2015",
        time: "5:20:58 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:05:57 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:20:57 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "4:32:57 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "7:11:57 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "11:15:56 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "12:05:56 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/15/2015",
        time: "5:22:56 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "warning",
        date: "01/15/2015",
        time: "9:51:22 PM",
        message: "Monitor has recovered from warning state"
    },
    {
        name: "www on ngs.ru",
        state: "warning",
        duration: "30 min",
        prevstate: "ok",
        date: "01/15/2015",
        time: "8:51:39 PM",
        message: "Warning: Time limit of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/16/2015",
        time: "2:06:53 AM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/16/2015",
        time: "9:29:33 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/16/2015",
        time: "2:07:32 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/16/2015",
        time: "9:30:12 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/16/2015",
        time: "2:04:23 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/16/2015",
        time: "2:08:03 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "down",
        duration: "1 min",
        prevstate: "unknown",
        date: "01/16/2015",
        time: "7:54:25 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "IPHost Network Monitor web interface on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/16/2015",
        time: "7:56:55 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/16/2015",
        time: "2:06:42 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/16/2015",
        time: "2:06:08 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/16/2015",
        time: "2:08:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/16/2015",
        time: "2:08:08 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on reg",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/17/2015",
        time: "8:03:20 PM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts on reg",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/17/2015",
        time: "8:12:57 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/17/2015",
        time: "1:15:06 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/17/2015",
        time: "1:15:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on ldap2.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/17/2015",
        time: "7:39:40 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/17/2015",
        time: "7:39:40 AM",
        message: "Poll failed: cannot resolve host IP address"
    },
    {
        name: "PING on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/17/2015",
        time: "7:40:23 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "PING on ldap2.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/17/2015",
        time: "7:40:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SNMP Traffic Speed on quetzalcoatl.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/17/2015",
        time: "7:39:33 AM",
        message: "Poll failed: Cannot create SNMP session: Unknown host (quetzalcoatl.lan:161)"
    },
    {
        name: "SNMP Traffic Speed on quetzalcoatl.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/17/2015",
        time: "7:41:25 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/17/2015",
        time: "10:23:21 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/17/2015",
        time: "10:23:21 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/17/2015",
        time: "12:23:04 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "warning",
        date: "01/17/2015",
        time: "11:23:05 PM",
        message: "Monitor has recovered from warning state"
    },
    {
        name: "www on ngs.ru",
        state: "warning",
        duration: "30 min",
        prevstate: "ok",
        date: "01/17/2015",
        time: "10:23:13 PM",
        message: "Warning: Time limit of '10 seconds' exceeded, spike filter applied"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/18/2015",
        time: "12:05:05 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) on uran.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/18/2015",
        time: "12:05:45 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/18/2015",
        time: "1:23:21 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/18/2015",
        time: "8:23:21 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "01/18/2015",
        time: "9:23:21 PM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/18/2015",
        time: "1:23:21 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/18/2015",
        time: "8:23:21 AM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/18/2015",
        time: "9:23:21 PM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/18/2015",
        time: "2:23:05 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/18/2015",
        time: "10:23:04 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/18/2015",
        time: "10:23:04 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "#attempts on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "8:23:48 PM",
        message: "Poll failed: unknown exception"
    },
    {
        name: "#attempts on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "8:24:49 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "2:06:06 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "3:06:06 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "5:47:07 PM",
        message: "Poll failed: Query failed: request timed out"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "2:06:45 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "3:06:46 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "DNS on cerberus.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "5:47:46 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "SSH (Remote Script or Program) on svn.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:46:56 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "HTTP(S) on netmon.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:47:04 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "HTTP(S) on svn.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:02 PM",
        message: "Down: Unacceptable response code: '401'. Consider adding it to the list of accepted response codes in client GUI."
    },
    {
        name: "IMAP, port 993 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:27 PM",
        message: "Poll failed: Timeout exceeded after sending logout command"
    },
    {
        name: "IMAP on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:27 PM",
        message: "Poll failed: Timeout exceeded after sending logout command"
    },
    {
        name: "IMAP on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:21 PM",
        message: "Poll failed: Timeout exceeded after sending logout command"
    },
    {
        name: "POP3, port 995 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:27 PM",
        message: "Poll failed: Falied to get server response on QUIT command: Authentication failed."
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:29:34 PM",
        message: "Poll failed: agent is not connected"
    },
    {
        name: "PING on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:48:44 PM",
        message: "Poll failed: agent is not connected"
    },
    {
        name: "POP3, port 995 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:21 PM",
        message: "Poll failed: Falied to get server response on QUIT command: Authentication failed."
    },
    {
        name: "POP3 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:21 PM",
        message: "Poll failed: Falied to get server response on QUIT command: Authentication failed."
    },
    {
        name: "IMAP, port 993 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:21 PM",
        message: "Poll failed: Timeout exceeded after sending logout command"
    },
    {
        name: "POP3 on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:27 PM",
        message: "Poll failed: Falied to get server response on QUIT command: Authentication failed."
    },
    {
        name: "SNMP Traffic Speed on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "8:24:42 PM",
        message: "Down: Timeout of '20 seconds' exceeded, spike filter applied"
    },
    {
        name: "SSH (Remote Script or Program) on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:04 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "Free space on svn.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:46:56 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "SSH (Remote Script or Program) #2 on ldap2.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:46:56 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "SSH (Remote Script or Program) #2 on ldap2.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:04 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:46:56 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "SSH (Remote Script or Program) on monstera.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:46:56 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "HTTP(S) on svn.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:01 PM",
        message: "Down: Unacceptable response code: '401'. Consider adding it to the list of accepted response codes in client GUI."
    },
    {
        name: "SSH (Remote Script or Program) on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:02 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password); Authentication by keyboard-interactive failed: Authentication failed (keyboard-interactive)"
    },
    {
        name: "SSH (Remote Script or Program) on neptune.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:46:54 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password); Authentication by keyboard-interactive failed: Authentication failed (keyboard-interactive)"
    },
    {
        name: "SSH (Remote Script or Program) on diamond.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:28:04 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "SSH (Remote Script or Program) on svn.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:04 PM",
        message: "Poll failed: Authentication by password failed: Authentication failed (username/password)"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:02:02 PM",
        message: "Poll failed: The service 'IPHost Network Monitor' is not running now"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:04:42 PM",
        message: "Poll failed: The service is not found: The specified service does not exist as an installed service."
    },
    {
        name: "Service: iphost on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:19:33 PM",
        message: "Poll failed: Failed connecting to the host: The RPC server is unavailable."
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:03:42 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:11:54 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "Service: iphost on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:19:42 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "TCP on kirill.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "8:23:26 PM",
        message: "Poll failed: Failed to connect to 127.0.0.1:1433 over TCP/IP"
    },
    {
        name: "TCP on kirill.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "8:24:31 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI CPU on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:18:09 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI CPU on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:19:48 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Memory on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:18:10 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Memory on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:19:50 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:19:23 PM",
        message: "Poll failed: Query failed: The RPC server is unavailable."
    },
    {
        name: "WMI Traffic Speed on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:20:41 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:02 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:10 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Speed on uran.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:47:07 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on birch.lan",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "7:18:16 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "WMI Traffic Volume on birch.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "7:21:14 PM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "WMI Traffic Volume on uran.lan",
        state: "down",
        duration: "",
        prevstate: "unknown",
        date: "01/19/2015",
        time: "7:28:05 PM",
        message: "Poll failed: Failed to obtain IWbemServices object: Access is denied."
    },
    {
        name: "www on ngs.ru",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "01/19/2015",
        time: "8:23:51 PM",
        message: "Poll failed: process is still running"
    },
    {
        name: "www on ngs.ru",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "01/19/2015",
        time: "8:36:03 PM",
        message: "Monitor has recovered from unknown state"
    },
    {
        name: "Disk C: free space on kirill",
        state: "ok",
        duration: "",
        prevstate: "warning",
        date: "02/28/2015",
        time: "4:56:10 PM",
        message: "Monitor has recovered from warning state"
    },
    {
        name: "Disk C: free space on kirill",
        state: "warning",
        duration: "",
        prevstate: "ok",
        date: "02/28/2015",
        time: "4:55:55 PM",
        message: "Warning: value '55050' is < 600000"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "1 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "1 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "10 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "10 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "11 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "2 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "2 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "3 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "3 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "4 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "4 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "5 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "5 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "6 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "6 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "7 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "7 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "8 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "8 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "9 hr 0 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "9 hr 30 min",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "down",
        duration: "",
        prevstate: "ok",
        date: "03/23/2015",
        time: "11:02:12 AM",
        message: "Down: Timeout of 5 seconds exceeded"
    },
    {
        name: "PING on 10.0.0.0",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "03/23/2015",
        time: "11:01:42 AM",
        message: "Monitor has recovered from down state"
    },
    {
        name: "HTTP(S) #2 on oak.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "03/26/2015",
        time: "11:10:13 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on oak.lan",
        state: "down",
        duration: "30 min",
        prevstate: "ok",
        date: "03/26/2015",
        time: "8:50:00 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on oak.lan",
        state: "down",
        duration: "4 min",
        prevstate: "ok",
        date: "03/26/2015",
        time: "11:10:13 AM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on oak.lan",
        state: "down",
        duration: "4 min",
        prevstate: "ok",
        date: "03/26/2015",
        time: "8:50:00 PM",
        message: "Poll failed: Couldn't connect to server"
    },
    {
        name: "HTTP(S) #2 on oak.lan",
        state: "ok",
        duration: "",
        prevstate: "down",
        date: "03/26/2015",
        time: "8:48:42 PM",
        message: "Monitor has recovered from down state"
    }
];

function CompareDateAndTime(a, b) {
    var ad = new Date(a.date + " " + a.time);
    var bd = new Date(b.date + " " + b.time);

    return ad < bd ? -1 : ad > bd ? 1 : 0;
}

fakeAlerts.sort(CompareDateAndTime);

var uniqueNames = {}; // string name --> int id map
var uniqueNameCount = 0;
        
for (index = 0; index < fakeAlerts.length; index++)
{
    // My fake data has only one date/time pair and no monitor id, so
    // here we assign same date to problem and message time and derive
    // unique monitor id for each name using a hash array
    if (!uniqueNames.hasOwnProperty(fakeAlerts[index].name))
    {
        uniqueNames[fakeAlerts[index].name] = uniqueNameCount++;
    }
    fakeAlerts[index].monitorId = uniqueNames[fakeAlerts[index].name];

    fakeAlerts[index].pDate = fakeAlerts[index].date;
    fakeAlerts[index].pTime = fakeAlerts[index].time;
    fakeAlerts[index].mDate = fakeAlerts[index].date;
    fakeAlerts[index].mTime = fakeAlerts[index].time;
}
