package com.etransportation.security.oauth2;

import java.util.Map;

public abstract class OAuth2UserInfo {

    protected Map<String, Object> attributes;

    public OAuth2UserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public abstract String getName();

    public abstract String getGoogleId();

    public abstract String getEmail();

    public abstract String getImageUrl();

    public abstract String getProvider();

    public abstract String getGivenName();

    public abstract String getFamilyName();

}
