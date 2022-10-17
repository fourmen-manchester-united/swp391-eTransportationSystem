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
    public String getId() {
        return (String) attributes.get("sub");
    }

    @Override
    public String getImageUrl() {
        return (String) attributes.get("picture");
    }

    @Override
    public String getFirstName() {
        return (String) attributes.get("givenName");
    }

    @Override
    public String getLastName() {
        return (String) attributes.get("familyName");
    }

    @Override
    public String getProfileImageUrl() {
        return (String) attributes.get("imageUrl");
    }

    @Override
    public String getProvider() {
        return "google";
    }

    @Override
    public String getProviderId() {
        return (String) attributes.get("googleId");
    }

    @Override
    public String getName() {
        return (String) attributes.get("name");
    }

    @Override
    public String getGender() {
        return (String) attributes.get("gender");
    }

    @Override
    public String getVerifiedEmail() {
        return (String) attributes.get("verified_email");
    }

}
