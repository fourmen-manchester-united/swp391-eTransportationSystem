package com.etransportation.security.oauth2;

import java.util.Map;

public class GoogleOAuth2UserInfo extends OAuth2UserInfo {

    public GoogleOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }

    @Override
    public String getImageUrl() {
        return (String) attributes.get("imageUrl");
    }

    @Override
    public String getProvider() {
        return "google";
    }

    @Override
    public String getName() {
        return (String) attributes.get("name");
    }

    @Override
    public String getFamilyName() {
        return (String) attributes.get("familyName");
    }

    @Override
    public String getGivenName() {
        return (String) attributes.get("givenName");
    }

    @Override
    public String getGoogleId() {
        return (String) attributes.get("googleId");
    }

}
