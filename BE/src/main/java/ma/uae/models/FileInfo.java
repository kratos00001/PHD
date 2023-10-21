package ma.uae.models;

import lombok.Data;

@Data
public class FileInfo {
	private String name;
	  private String url;
	  private String type;

	  public FileInfo(String name, String url, String type) {
	    this.name = name;
	    this.url = url;
	    this.type = type;
	  }

}
