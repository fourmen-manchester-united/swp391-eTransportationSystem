package com.etransportation.payload.request;

public class PagingRequest {

    private int page;
    private int size;

    public int getPage() {

        return page;
    }

    public void setPage(int page) {
        this.page = page <= 0 ? 1 : page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size <= 0 ? 10 : size;
    }

}
