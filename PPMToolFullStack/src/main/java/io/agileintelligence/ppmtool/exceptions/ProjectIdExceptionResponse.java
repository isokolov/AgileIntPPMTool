package io.agileintelligence.ppmtool.exceptions;

public class ProjectIdExceptionResponse {

    /* Exception by trying to create a post request with the already
    *  existing projectIdentifier */

    private String projectIdentifier;

    public ProjectIdExceptionResponse(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
