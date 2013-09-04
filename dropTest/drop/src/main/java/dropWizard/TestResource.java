package dropWizard;

import com.yammer.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created with IntelliJ IDEA.
 * User: twer
 * Date: 9/4/13
 * Time: 5:48 PM
 * To change this template use File | Settings | File Templates.
 */

@Path("/hello-test")
@Produces(MediaType.TEXT_HTML)
public class TestResource {

    @GET
    @Timed
    public String sayTest() {
        return "test!";
    }
}
