package com.etransportation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Notification extends Base {

    private String content;
    private Date createdDate;
    // relationship
    private List<Account> accountId = new ArrayList<Account>();
    private List<Account> accountAdminId = new ArrayList<Account>();
}
